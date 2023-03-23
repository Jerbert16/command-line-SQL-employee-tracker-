USE employees_db;

INSERT INTO department (department_name)
VALUES ("Marketing"),
       ("Finance"),
       ("Engineering"),
       ("Human Resources"),
       ("Legal"),
       ("Customer Service"),
       ("Sales"),
       ("Maintenance");

INSERT INTO job (title, salary, deparment_id)
VALUES ("Sr. Copywriter", 105000, 1),
       ("Sr. Financial Analyst", 103000, 2),
       ("Engineering Team Lead", 156000, 3),
       ("Sr. HR Specialist", 87000, 4),
       ("Head Legal Counsel", 175000, 5),
       ("Customer Service Rep", 57000, 6),
       ("Sales Associate", 77000, 7),
       ("Heavy Equipment Service Tech", 97000, 8);

       INSERT INTO employee (first_name, last_name, employee_role, their_dept, salary, manager, role_id)
VALUES ("Waylon", "Rhodes", "Sr. Copywriter", "Marketing", 105000, "Bill", 1),
       ("Gianna", "Tucci", "Sr. Financial Analyst", "Finance", 103000, "Bob", 2),
       ("Jerome", "Banago", "Engineering Team Lead", "Engineering", 156000, "Jane", 3),
       ("Billy-Bob", "Fox","Sr. HR Specialist", "Human Resources", 87000, "Hank", 4),
       ("Rojilio", "Lopez", "Head Legal Counsel", "Legal", 175000, "Sarah", 5),
       ("Joey", "Denino", "Customer Service Rep", "Customer Service", 57000, "Bri", 6),
       ("Alice", "Williams", "Sales Associate", "Sales", 77000, "Alejandra", 7),
       ("Jenny", "McAdams", "Heavy Equipment Service Tech", "Maintenance", 97000, "Jack", 8);
  