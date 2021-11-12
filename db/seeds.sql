INSERT INTO department (name)
VALUES ("Sales"),
       ("Engineering"),
       ("Finance"),
       ("Legal");

INSERT INTO role (title, salary, department_id)
VALUES ("Sales Lead", 100000, 1),
       ("Salesperson", 80000, 1),
       ("Lead Engineer", 150000, 2),
       ("Software Engineer", 120000, 2),
       ("Account Manager", 160000, 3),
       ("Accountant", 125000, 3),
       ("Legal Team Lead", 250000, 4),
       ("Lawyer", 190000, 4);

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("El", "Chapo", 1, NULL),
       ("El", "Mayo", 2, 1),
       ("Amado", "Carrillo", 3, NULL),
       ("El", "Azul", 4, 3),
       ("Pacho", "Herrera", 5, NULL),
       ("Benjamin", "Arellano", 6, 5),
       ("Pablo", "Acosta", 7, NULL),
       ("Ramon", "Arellano", 8, 7);