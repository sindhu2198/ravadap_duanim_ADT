const express = require("express");
const app = express();
const bodyParser = require("body-parser");
const mysql = require("mysql2");
const cors = require("cors");

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "Sindhu2111@",
  database: "ept_prj",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get("/api/get", (req, res) => {
  const sqlGet = "SELECT * FROM employee_data";
  db.query(sqlGet, (error, result) => {
    res.send(result);
  });
});

app.post("/api/post", (req, res) => {
  const { Name, Email, location, rating_2023, rating_2022, rating_2021, Salary_2023, Salary_2022, Salary_2021, Comments } = req.body;
  console.log(req.body); 
  const sqlInsert =
    "INSERT INTO employee_data (EID, Name,Email,location,rating_2023,rating_2022,rating_2021,Salary_2023,Salary_2022,Salary_2021,Comments) VALUES (NULL, ?, ?, ?, ?, ?, ?, ?, ?, ?, ?)";
  db.query(sqlInsert, [Name, Email, location, rating_2023, rating_2022, rating_2021, Salary_2023, Salary_2022, Salary_2021, Comments], (error, result) => {
    if (error) {
      console.log(error);
    }
    res.send(result);
  });
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

app.get("/api/get/:id", (req, res) => {
  const { id } = req.params;
  const sqlGet = "SELECT * FROM employee_data WHERE EID = ?";
  db.query(sqlGet, id, (error, result) => {
    if (error) {
      console.log(error);
    }
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
