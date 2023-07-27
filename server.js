// Imports
const mysql = require("mysql2");
const inquirer = require("inquirer");

// Variables
let dash = "-";

// Connect to database
const db = mysql.createConnection(
  {
    host: "localhost",
    user: "root",
    database: "employee_db"
  },
  console.info(dash.repeat(20)),
  console.info("Connected to the employee_db database."),
  console.info(dash.repeat(20)),
);

// Function that starts the application
async function init(){
 const mainMenu = await inquirer.prompt([
  {
    type: "list",
    name: "choices",
    message: "Please, choose an option:",
    choices: [
          {value: "View All Departments" },
          {value: "View All Roles"},
          {value: "View All Employees" },
          {value: "Add a Department" },
          {value: "Add a Role" },
          {value: "Add an Employee" },
          {value: "Update an Employee Role"},
          {value: "View Employees by Manager"},
          {value: "Quit"},
          ]
  }
])
  switch (mainMenu.choices){
    case "View All Departments" : 
      viewAllDepartments();
      break;
    case  "View All Roles" : 
      viewAllRoles();
      break;
    case "View All Employees" : 
      viewAllEmployees();
      break; 
    case "Add a Department" : 
      addDepartment();
      break;  
    case "Add a Role" : 
      addRole();
      break;  
    case "Add an Employee" : 
      addEmployee();
      break;  
    case "Update an Employee Role" : 
      updateEmployeeRole();
      break;     
    case "View Employees by Manager" : 
      employeesByManager();
      break;   
    case "Quit" : 
      quit();
      break;         
  }
  
}

// View all departments
const viewAllDepartments = () =>{
  const query = `SELECT  department_name as "Department Name"
                 FROM department;`;
  db.query(query, function (err, results) {
  console.table(results);
  init();
}) 
}

// View all roles
const viewAllRoles = () =>{
  db.query('SELECT * FROM role', function (err, results) {
  console.table(results);
  init();
}) 
}

// View all employees
const viewAllEmployees = () =>{
  db.query('SELECT * FROM employee', function (err, results) {
  console.table(results);
  init();
}) 
}

const addDepartment = () =>{
  const department = inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "Please, enter a department name:",
    }
  ])
  .then((answer) => {


  })
          
  }
 

const addRole = () =>{
  init()
}

const addEmployee = () =>{
  init();
}


const updateEmployeeRole = () =>{
  init();
}

const employeesByManager = () =>{
  init();
}

const quit = () =>{
  db.end();
  console.info(dash.repeat(20));
  console.info("I will see you later!");
  console.info(dash.repeat(20));
}

// Call Init function
init();