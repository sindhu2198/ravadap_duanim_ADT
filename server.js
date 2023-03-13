const express = require('express');
const mysql = require('mysql');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();


// set up middleware
app.use(bodyParser.json());
app.use(cors());

// create MySQL connection
const connection = mysql.createConnection({
  host: '127.0.0.1',
  user: 'root',
  password: 'Sindhu2111@',
  database: 'duanim'
  
});

// connect to MySQL database
connection.connect((err) => {
  if (err) {
    console.error('Error connecting to database: ' + err.stack);
    return;
  }
  console.log('Connected to database as id ' + connection.threadId);
});

// set up API routes and endpoints
app.get('/employees', (req, res) => {
  const sql = 'SELECT * FROM employees';
  connection.query(sql, (err, results) => {
    if (err) throw err;
    res.send(results);
  });
});

app.post('/employees', (req, res) => {
  const employee = req.body;
  const sql = 'INSERT INTO employees SET ?';
  connection.query(sql, employee, (err, result) => {
    if (err) throw err;
    res.send(result);
  });
});


// handle login request
app.post('/api/login', (req, res) => {
  const { email, password } = req.body;

  // query the database to find user with given email and password
  const sql = `SELECT * FROM users WHERE email = ? AND password = ?`;
  connection.query(sql, [email, password], (err, results) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    } else if (results.length === 0) {
      res.status(401).json({ message: 'Invalid email or password' });
    } else {
      const user = results[0];
      const token = jwt.sign({ userId: user.id }, 'myapp_secret_key');
      res.json({ token });
    }
  });
});

// handle signup request
app.post('/api/signup', (req, res) => {
  const { email, password } = req.body;

  // insert new user to the database
  const sql = `INSERT INTO users (email, password) VALUES (?, ?)`;
  connection.query(sql, [email, password], (err, result) => {
    if (err) {
      console.error(err);
      res.status(500).json({ message: 'Internal server error' });
    } else {
      const userId = result.insertId;
      const token = jwt.sign({ userId }, 'myapp_secret_key');
      res.json({ token });
    }
  });
});

// start the server
app.listen(3000, () => console.log('Server is running on port 3000'));



// start server
const port = 3000;
app.listen(port, () => {
  console.log(`Server started on port ${port}`);
});