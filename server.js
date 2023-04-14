require('dotenv').config();
const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

const db = mysql.createPool({
  host: process.env.MYSQL_HOST,
  user: process.env.MYSQL_USER,
  password: process.env.MYSQL_PASSWORD,
  database: process.env.MYSQL_DATABASE,
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.post('/signup', async (req, res) => {
  console.log("Connected to db")
  const { username, email, password, role } = req.body;

  // Hash the password
  const hashedPassword = await bcrypt.hash(password, 10);

  // Save the user to the database
  db.query(
    'INSERT INTO users (username, email, password, role) VALUES (?, ?, ?, ?)',
    [username, email, hashedPassword, role],
    (err, result) => {
      if (err) {
        console.error(err);
        res.status(400).send('Error registering the user.');
      } else {
        res.status(201).send('User registered successfully.');
      }
    }
  );
});


app.post('/signin', (req, res) => {
  const { email, password } = req.body;

  // Find the user in the database
  db.query(
    'SELECT * FROM users WHERE email = ?',
    [email],
    async (err, result) => {
      if (err) {
        console.log(err);
        res.status(400).send('Error signing in.');
      } else {
        if (result.length > 0) {
          const user = result[0];

          // Compare the provided password with the stored password
          const match = await bcrypt.compare(password, user.password);

          if (match) {
            // Create a JWT
            const token = jwt.sign(
              { id: user.id, role: user.role, employeeId: user.id },
              process.env.JWT_SECRET,
              {
                expiresIn: '1h',
              }
            );

            res.status(200).json({
              token,
              user: {
                id: user.id,
                username: user.username,
                email: user.email,
                role: user.role,
                employeeId:user.id
              },
            });
          } else {
            res.status(401).send('Invalid password.');
          }
        } else {
          res.status(404).send('User not found.');
        }
      }
    }
  );
});

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM employee_data";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

// ... other imports and configurations

app.post("/api/post", async (req, res) => {
  const { Name, Email, years } = req.body;

  // Get a connection from the pool
  const connection = await db.promise().getConnection();

  try {
    // Check if the email already exists in the employee table
    const checkEmailQuery = `SELECT EID FROM employee WHERE Email = ?`;
    const [emailResult] = await connection.query(checkEmailQuery, [Email]);

    // If the email already exists, return an error message
    if (emailResult.length > 0) {
      return res.status(400).send("Email already exists. Please use a different email.");
    }

    // Begin transaction
    await connection.beginTransaction();

    // If the email doesn't exist, insert the new employee
    const insertEmployeeQuery = `
      INSERT INTO employee (Name, Email)
      VALUES (?, ?)
    `;
    const [employeeResult] = await connection.query(insertEmployeeQuery, [Name, Email]);
    const EID = employeeResult.insertId;

    for (let yearObj of years) {
      const { year, projects, rating, salary, Comments } = yearObj;

      // Insert the salary data
      const insertSalaryQuery = `
        INSERT INTO salary (EID, year, salary)
        VALUES (?, ?, ?)
      `;
      await connection.query(insertSalaryQuery, [EID, year, salary]);

      // Insert the performance review data
      const insertPerformanceReviewQuery = `
        INSERT INTO performance_review (EID, performance_review_date, reviewer_name, rating, Comments)
        VALUES (?, NOW(), "sindhu", ?, ?)
      `;
      await connection.query(insertPerformanceReviewQuery, [EID, rating, Comments]);

      // Add projects and project_employee entries
      const insertProjectEmployeeQuery = `
        INSERT INTO project_employee (project_id, project_name, EID, year)
        VALUES ((SELECT id FROM project WHERE project_name = ?), ?, ?, ?);
      `;

      // Insert the project performance review data
      const insertProjectPerformanceReviewQuery = `
        INSERT INTO project_performance_review (employee_id, project_name, year, rating, salary, comments)
        VALUES (?, ?, ?, ?, ?, ?);
      `;

      for (let project of projects) {
        if (!project || project.trim() === "") {
          console.log("Project object:", project);
          console.error("Project name is NULL. Skipping this iteration.");
          continue;
        }
        console.log("Inserting project_employee entry for:", project);
        await connection.query(
          insertProjectEmployeeQuery,
          [project, project, EID, year]
        );
      
        // Add the project performance review entry
        await connection.query(
          insertProjectPerformanceReviewQuery,
          [EID, project, year, rating, salary, Comments]
        );
      }
      
    }

    // Commit transaction
    await connection.commit();

    // Send success response
    res.sendStatus(200);

  } catch (err) {
    // Roll back transaction if an error occurred
    await connection.rollback();

    console.error("Error in /api/post:", err);
    res.status(500).send(err);
  } finally {
    // Release the connection back to the pool
    connection.release();
  }
});





app.delete("/api/remove/:id", (req, res) => {
  const { id } = req.params;
  const sqlRemove = "DELETE FROM employee_data WHERE EID = ?";
  db.query(sqlRemove, id, (error, result) => {
    if (error) {
      console.log(error);
    }
  });
});

app.get("/api/get/:EID", (req, res) => {
  const { EID } = req.params;
  console.log("Requested EID:", EID); // Log the requested EID
  const sqlGet = "SELECT * FROM get_employee_details WHERE EID = ?";
  db.query(sqlGet, EID, (error, result) => {
    if (error) {
      console.log(error);
    }
    console.log("Result from database:", result); // Log the result from the database
    res.send(result);
  });
});


app.put("/api/update/:id", (req, res) => {
    const { id } = req.params;
    const {name, email, contact} = req.body;
    const sqlUpdate = "UPDATE employee_data SET EName = ?, EEmail = ?, ELocation = ? WHERE EID = ?";
    db.query(sqlUpdate, [name, email, contact, id], (error, result) => {
      if (error) {
        console.log(error);
      }
      res.send(result);
    });
  });

app.get("/", (req, res) => {
  //   const sqlInsert =
  //     "INSERT INTO contact_db (name, email, contact) VALUES ('john doe', 'johndoe@gmail.com',34455666)";
  //   db.query(sqlInsert, (error, result) => {
  //     console.log("error", error);
  //     console.log("result", result);
  //     res.send("Hello Express");
  //   });
});

app.listen(5001, () => {
  console.log("Server is running on port 5001");
});
