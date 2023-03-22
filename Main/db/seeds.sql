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

       INSERT INTO employee (first_name, last_name, role_id)
VALUES ("Waylon", "Rhodes", 1),
       ("Gianna", "Tucci", 2),
       ("Jerome", "Banago", 3),
       ("Billy-Bob", "Fox", 4),
       ("Rojilio", "Lopez", 5),
       ("Joey", "Denino", 6),
       ("Alice", "Williams", 7),
       ("Jenny", "McAdams", 8);
  