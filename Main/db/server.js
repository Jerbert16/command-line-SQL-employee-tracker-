const express = require("express");
const mysql = require("mysql2");
const inquirer = require("inquirer");

const PORT = process.env.PORT || 3001;
const app = express();

app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: "127.0.0.1",
    // MySQL username,
    user: "root",
    // MySQL password here
    password: "aaa123",
    database: "employees_db",
  },
  console.log(`Connected to the employees_db database.`)
);

const questions = [
  {
    type: "list",
    name: "viewOptns",
    message: "What would you like to do?",
    choices: [
      "View All Departments",
      "View All Roles",
      "View All Employees",
      "Add a Deparment",
      "Add a Role",
      "Add an Employee",
      "Update Employee Role",
    ],
  },
];

startProgram();

function startProgram() {
  inquirer.prompt(questions).then((responses) => {
    const optnChoice = responses.viewOptns;

    switch (optnChoice) {
      case "View All Departments":
        viewAllDepts();
        break;
      case "View All Roles":
        viewAllRoles();
        break;
      case "View All Employees":
        viewAllEmployees();
        break;
      case "Add a Deparment":
        addDept();
        break;
      case "Add a Role":
        addRole();
        break;
      case "Add an Employee":
        console.log("add employee");
        break;
      case "Update Employee Role":
        console.log("update employee");
        break;
    }
  })
};

function viewAllDepts() {
    db.query(
        "SELECT * FROM department",
        function (err, results) {
          console.log(results);
        }
      )
      startProgram();
};

function viewAllRoles() {
    db.query(
        "SELECT * FROM job",
        function (err, results) {
          console.log(results);
        }
      )
      startProgram();
};

function viewAllEmployees() {
    db.query(
        "SELECT * FROM employee",
        function (err, results) {
          console.log(results);
        }
      )
      startProgram();
};

function addDept() {
  inquirer
    .prompt({
      type: "input",
      message: "What do you want to name the department?",
      name: "deptName",
    })
    .then(function (response) {
      const newDept = response.deptName;
      let sql = `INSERT INTO department (department_name) VALUES("${newDept}")`
      db.query(sql);
      viewAllDepts();
    });
}

function addRole() {
  inquirer
    .prompt([{
      type: "input",
      message: "What job position would you like to add?",
      name: "roleName",
    },
    {
      type: "number",
      message: "What is the salary for this role?",
      name: "roleSalary",
    },
    {
      type: "number",
      message: "What is the deparment id you would like to use?",
      name: "roleNumber",
    }])
    .then(function (response) {
      const newRole = response.roleName;
      const roleSalary = response.roleSalary;
      const roleNumber = response.roleNumber;

      let roleSql = `INSERT INTO job (title, salary, deparment_id) VALUES("${newRole}",${roleSalary},${roleNumber})`
      db.query(roleSql);
      viewAllRoles();
    });
}

app.use((req, res) => {
    res.status(404).end();
    });
    
    app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    });
