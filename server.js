// Requirers
const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');
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
  db.query('SELECT * FROM employee_db.employee;', function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      inquirerPrompt();
    }
  })
}

function addEmployee() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'firstName',
      message: 'Enter the NEW employee first name.'
    },
    {
      type: 'input',
      name: 'lastName',
      message: "Enter the NEW employee's last name."
    },
    {
      type: 'input',
      name: 'roleId',
      message: 'Enter the role ID for this employee.'
    },
    {
      type: 'input',
      name: 'managerId',
      message: "Enter the employees MANAGER'S ID."
    }]).then((answer) => {
      db.query(`INSERT INTO employee (first_name, last_name, role_id, manager_id) VALUES ('${answer.firstName}', '${answer.lastName}', '${answer.roleId}', '${answer.managerId}')`);
      viewEmployees();
    }).catch((err) => {
      if(err) {
        console.log(err);
      } else {
        inquirerPrompt();
      }
    })
}

function updateEmployeeRole() {
  inquirer.prompt([
    {
      type: 'input',
      name: 'emp',
      message: "Enter the employee's ID whose role you would like to change."
    },
    {
      type: 'input',
      name: 'newRole',
      message: "Enter the employees new role ID."
    }
  ]).then((answer) => {
    db.query(`UPDATE employee SET role_id=${answer.newRole} WHERE id = ${answer.emp}`);
    viewEmployees();
  }).catch((err) => {
    if(err) {
      console.log(err);
    } else {
      inquirerPrompt();
    }
  })
}

function viewRoles() {
  db.query('SELECT * FROM role ORDER BY role.id', function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      inquirerPrompt();
    }
  })
}

function addRole() {
  inquirer.prompt([
  {
    type: 'input',
    name: 'new_role',
    message: 'Enter the NEW job title.'
  },
  {
    type: 'input',
    name: 'salary',
    message: 'Enter the salary for this position.'
  },
  {
    type: 'input',
    name: 'departmentId',
    message: 'Enter the department ID for this role.'
  }]).then((answer) => {
    db.query(`INSERT INTO role (title, salary, department_id) VALUES ('${answer.new_role}', '${answer.salary}', '${answer.departmentId}')`);
    viewRoles();
  }).catch((err) => {
    if(err) {
      console.log(err);
    } else {
      inquirerPrompt();
    }
  })
}

function viewDepartments() {
  db.query('SELECT * FROM department ORDER BY department.id' ,function (err, result) {
    if (err) {
      console.log(err);
    } else {
      console.table(result);
      inquirerPrompt();
    }
  })
}

function addDepartment() {
  inquirer.prompt([{
    type: 'input',
    name: 'new_department',
    message: 'What would you like to name the NEW department?'
  }]).then((answer) => {
    db.query(`INSERT INTO department (name) VALUES ('${answer.new_department}')`);
    viewDepartments();
  }).catch((err) => {
    if(err) {
      console.log(err);
    } else {
      inquirerPrompt();
    }
  })
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
      return;
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
