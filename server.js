// Requirers
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
require('dotenv').config();

const PORT = process.env.PORT || 3306;
const app = express();

// Express middleware
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Connect to database
const db = mysql.createConnection(
  {
    host: 'localhost',
    user: process.env.DB_USER,
    password: process.env.DB_PASSWORD,
    database: process.env.DB_NAME
  },
  console.log(`Connected to the employee_db database.`)
);

const inquirerPrompt = () => {
  inquirer.prompt([
    {
      type: 'list',
      name: 'task',
      message: 'What would you like to do?',
      choices: [
        'View All Employees',
        'Add Employee',
        'Update Employee Role',
        'View All Roles',
        'Add Role',
        'View all Departments',
        'Add Department',
        'Exit'
      ]
    }
  ])
  .then((answers) => {
    const { task } = answers;
  })
}

inquirerPrompt();

// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
