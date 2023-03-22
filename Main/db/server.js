const express = require('express');
const mysql = require('mysql2');
const inquirer = require('inquirer');

const PORT = process.env.PORT || 3001;
const app = express();


app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const db = mysql.createConnection(
  {
    host: '127.0.0.1',
    // MySQL username,
    user: 'root',
    // MySQL password here
    password: 'aaa123',
    database: 'employees_db' 
  },
  console.log(`Connected to the employees_db database.`)
);

inquirer
  .prompt([
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
  ])
  .then((responses) => {
    const optnChoice = responses.viewOptns;

    if (optnChoice === "View All Departments") {
      db.query(
        "SELECT * FROM department",
        function (err, results) {
          console.log(results);
        }
      );
    }
  });




app.use((req, res) => {
res.status(404).end();
});

app.listen(PORT, () => {
console.log(`Server running on port ${PORT}`);
});