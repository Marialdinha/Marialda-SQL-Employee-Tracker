// Imports
const mysql = require("mysql2");
const inquirer = require("inquirer");

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    database: "employee_db"
  },
  console.info("Connected to the employee_db database.")
);

// Initialize Function
async function init(){
 const mainMenu = await inquirer.prompt([
  {
    type: "list",
    name: "choices",
    message: "Main Menu",
    choices: [
          {choice: "View All Departments", value: "viewAllDepartments" },
          {choice: "View All Roles", value: "viewAllRoles" },
          {choice: "View All Employees", value: "viewAllEmployees" },
          {choice: "Add a Department", value: "addDepartment" },
          {choice: "Add a Role", value: "addRole" },
          {choice: "Add an Employee", value: "addEmployee" },
          {choice: "Update an Employee Role", value: "updateEmployeeRole" },
          ]
  }
])

  console.log(mainMenu.choices);
  switch (mainMenu.choices){
    case "viewAllDepartments" : 
      viewAllDepartments();
      break;
    case "viewAllRoles" : 
      viewAllRoles();
      break;
    case "viewAllEmployees" : 
       viewAllEmployees();
      break; 
    case "addDepartment" : 
       addDepartment();
     break;       
  }
}
   
const viewAllDepartments = () =>{
  db.query('SELECT * FROM department', function (err, results) {
  console.info("Lst of Departments");
  console.info(results);
}) 
}

const viewAllRoles = () =>{
  db.query('SELECT * FROM role', function (err, results) {
  console.info("Lst of Roles");
  console.info(results);
}) 
}

const viewAllEmployees = () =>{
  db.query('SELECT * FROM employee', function (err, results) {
  console.info("Lst of Employees");
  console.info(results);
}) 
}

const addDepartment = () =>{

}

init();