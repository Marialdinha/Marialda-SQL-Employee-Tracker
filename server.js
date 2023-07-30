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
    case "Quit" : 
      quit();
      break;         
  }
}

// View all departments
const viewAllDepartments = () =>{
  const query = `SELECT department_id as "Department ID",
                        department_name as "Department Name"
                 FROM department;`;
  db.query(query, function (err, results) {
  if (err) throw err;
  console.table(results);
  init();
}) 
}

// View all roles
const viewAllRoles = () =>{
  const query = `SELECT role_id as "Role ID",
                        title as "Role Title",   
                        salary as "Role Salary",   
                        department_name as "Department Name"
                 FROM role a
                 left join department b
                 on a.department_id = b.department_id;`;
  db.query(query, function (err, results) {
  if (err) throw err;
  console.table(results);
  init();
}) 
}

// View all employees
const viewAllEmployees = () =>{
  const query = `SELECT a.employee_id as "Employee ID",
                        CONCAT(a.first_name, " ", a.last_name) as "Employee Name",
                        CONCAT(d.first_name, " ", d.last_name) as "Manager", 
                        title as "Role", 
                        department_name as "Department",
                        salary as "Salary"
                 FROM employee a
                 left join role b on a.role_id = b.role_id
                 left join department c on b.department_id = c.department_id
                 left join employee d on a.manager_id = d.employee_id;`;
  db.query(query, function (err, results) {
  if (err) throw err;
  console.table(results);
  init();
}) 
}

// Add a department
const addDepartment = () =>{
  const department = inquirer.prompt([
    {
      type: "input",
      name: "departmentName",
      message: "Please, enter a department name:",
    }
  ])
  .then((answer) => {
     const query = `INSERT INTO department (department_name)
                    VALUES ("${answer.departmentName}");`;
     db.query(query, function (err, results) {
      if (err) throw err;
      console.info(dash.repeat(20)),
      console.info(`Department ${answer.departmentName} inserted into table`),
      console.info(dash.repeat(20)),
      viewAllDepartments(); 
    }) 
  })       
  }

  const departmentList =  () =>{
    const query = `SELECT * FROM department;`;
    db.query(query, function (err, results) {  
      if (err) throw err;  
      return results;
    })
  }
 
// Add a role
const addRole = () =>{
  const query = `SELECT * FROM department;`;
  db.query(query, function (err, results) {  
  if (err) throw err;  
  const role = inquirer.prompt([  
    {
      type: "input",
      name: "roleName",
      message: "Please, enter a role to be added:",
    },
    {
      type: "input",
      name: "roleSalary",
      message: "Please, enter the salary for the role:",
    },
    {
      type: "list",
      name: "roleDepartment",
      message: "Please, select department for this role:",
      choices:  results.map((roleDepartment) => roleDepartment.department_name),
    },
  ])
  .then((answer) => {
    const department = results.find(
        (roleDepartment) => roleDepartment.department_name === answer.roleDepartment
    );
    const query = `INSERT INTO role (title, salary, department_id)
                   VALUES ("${answer.roleName}", ${answer.roleSalary}, ${department.department_id});`;
    db.query(query, function (err, results) {
     if (err) throw err;
     console.info(dash.repeat(20)),
     console.info(`Role ${answer.roleName} inserted into table`),
     console.info(dash.repeat(20)),
     viewAllRoles()
     }) 
    })
  })
}


// Add an Employee
const addEmployee = () =>{
  const employee = inquirer.prompt([  
    {
      type: "input",
      name: "employeeName",
      message: "Please, enter employee first name to be added:",
    },
  init();
}

// Update employee
const updateEmployeeRole = () =>{
  init();
}

// 
// End process
const quit = () =>{
  db.end();
  console.info(dash.repeat(20));
  console.info("I will see you later!");
  console.info(dash.repeat(20));
}

// Call Init function
init();