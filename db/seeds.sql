INSERT INTO department (name)
VALUES ("Web Development"),
       ("Human Resouces"),
       ("Finance"),
       ("Sales");

INSERT INTO role (title, salary, department_id)
VALUES ("Front End Developer", 80000, 1),
       ("Back End Developer", 100000, 1),
       ("Resource Manager", 75000, 2),
       ("Hiring Manager", 70000, 2),
       ("Accountant", 90000, 3),
       ("Analyst", 95000, 3),
       ("Sales Rep", 60000, 4),
       ("Sales Manager", 85000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("El", "Chapo", 1, 2),
       ("El", "Mayo", 2, NULL),
       ("El", "Azul", 3, NULL),
       ("Amado", "Carrillo", 4, 3),
       ("Pacho", "Herrera", 5, 6),
       ("Benjamin", "Arellano", 6, NULL),
       ("Ramon", "Arellano", 7, 8),
       ("Pablo", "Acosta", 8, NULL);
    --    I was watching narcos prior to this^^