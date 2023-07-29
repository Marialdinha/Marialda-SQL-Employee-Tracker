INSERT INTO department (department_name)
VALUES ("Engineering"),
       ("Finance" ),    
       ("Legal" ),  
       ("Sales" );

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Person", 100000,4 ),
       ("Sales Lead", 150000, 4 ),
       ("Lead Engineer",150000,1 ),
       ("Software Engineer",100000, 1),
       ("Legal Team Lead",300000, 3),
       ("Lawyer",200000, 3),
       ("Accountant",100000, 2),
       ("Account Manageer",200000, 2);

INSERT INTO employee ( first_name,last_name, role_id, manager_id)
VALUES  ("John", "Smith", 5, NULL ),
        ("Mary", "Smith", 6, 1 ),
        ("Sophia", "Brown", 6,1 ),
        ("Oliver", "Mo", 8, 2 ),
        ("Kevin", "Chan", 7, 2 ),
        ("Mary", "Soares", 1, 3),
        ("Mike", "Rodriguez", 2, 3 );