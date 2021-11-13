// Requirers
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
const Connection = require('mysql2/typings/mysql/lib/Connection');
require('dotenv').config();

const PORT = process.env.PORT || 3001;
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

// Functions
function viewEmployees() {

}

function addEmployee() {

}

function updateEmployeeRole() {

}

function viewRoles() {

}

function addRole() {

}

function viewDepartments() {

}

function addDepartment() {

}

// Inquirer prompt with function calls
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
    if (task === 'View All Employees') {
      viewEmployees();
    } else if (task === 'Add Employee') {
      addEmployee();
    } else if (task === 'Update Employee Role') {
      updateEmployeeRole();
    } else if (task === 'View All Roles') {
      viewRoles();
    } else if (task === 'Add Role') {
      addRole();
    } else if (task === 'View all Departments') {
      viewDepartments();
    } else if (task === 'Add Department') {
      addDepartment();
    } else {
      
    }
  })
}

const appArt = () => {
  console.log('███████╗███╗░░░███╗██████╗░██╗░░░░░░█████╗░██╗░░░██╗███████╗███████╗')
  console.log('██╔════╝████╗░████║██╔══██╗██║░░░░░██╔══██╗╚██╗░██╔╝██╔════╝██╔════╝')
  console.log('█████╗░░██╔████╔██║██████╔╝██║░░░░░██║░░██║░╚████╔╝░█████╗░░█████╗░░')
  console.log('██╔══╝░░██║╚██╔╝██║██╔═══╝░██║░░░░░██║░░██║░░╚██╔╝░░██╔══╝░░██╔══╝░░')
  console.log('███████╗██║░╚═╝░██║██║░░░░░███████╗╚█████╔╝░░░██║░░░███████╗███████╗')
  console.log('╚══════╝╚═╝░░░░░╚═╝╚═╝░░░░░╚══════╝░╚════╝░░░░╚═╝░░░╚══════╝╚══════╝')
  console.log('')
  console.log('   ███╗░░░███╗░█████╗░███╗░░██╗░█████╗░░██████╗░███████╗██████╗░')
  console.log('   ████╗░████║██╔══██╗████╗░██║██╔══██╗██╔════╝░██╔════╝██╔══██╗')
  console.log('   ██╔████╔██║███████║██╔██╗██║███████║██║░░██╗░█████╗░░██████╔╝')
  console.log('   ██║╚██╔╝██║██╔══██║██║╚████║██╔══██║██║░░╚██╗██╔══╝░░██╔══██╗')
  console.log('   ██║░╚═╝░██║██║░░██║██║░╚███║██║░░██║╚██████╔╝███████╗██║░░██║')
  console.log('   ╚═╝░░░░░╚═╝╚═╝░░╚═╝╚═╝░░╚══╝╚═╝░░╚═╝░╚═════╝░╚══════╝╚═╝░░╚═╝')
}


// Calls function on applicating launch
appArt();
inquirerPrompt();


// Default response for any other request (Not Found)
app.use((req, res) => {
  res.status(404).end();
});

app.listen(PORT, () => {
  console.log('');
  console.log(`Server running on port ${PORT}`);
});
