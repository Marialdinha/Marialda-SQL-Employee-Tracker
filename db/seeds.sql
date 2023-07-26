INSERT INTO department (department_id, department_name)
VALUES (1,"Engineering"),
       (2,"Finance" ),    
       (3,"Legal" ),  
       (4,"Sales" );

INSERT INTO role ( role_id,title, salary, department_id)
VALUES (1, "Sales Person", 100000,4 ),
       (2, "Sales Lead", 150000, 4 ),
       (3, "Lead Engineer",150000,1 ),
       (4, "Software Engineer",100000, 1),
       (5, "Legal Team Lead",300000, 3),
       (6, "Lawyer",200000, 3),
       (7, "Accountant",100000, 2),
       (8, "Account Manageer",200000, 2);

INSERT INTO employee ( employee_id, firt_name,last_name, role_id, manager_id)
VALUES  (1,"John", "Smith", 5, NULL ),
        (2,"Mary", "Smith", 6, 1 ),
        (3,"Sophia", "Brown", 6,1 ),
        (4,"Oliver", "Mo", 8, 2 ),
        (5,"Kevin", "Chan", 7, 2 ),
        (6,"Mary", "Soares", 1, 3),
        (7,"Mike", "Rodriguez", 2, 3 );