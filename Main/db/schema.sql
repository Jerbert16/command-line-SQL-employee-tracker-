DROP DATABASE IF EXISTS employees_db;
CREATE DATABASE employees_db;

USE employees_db;

CREATE TABLE department (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY,
  department_name VARCHAR(30) NOT NULL
);

CREATE TABLE job (
    id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
    title VARCHAR(30) NOT NULL,
    salary INT NOT NULL,
    deparment_id INT,
    FOREIGN KEY (deparment_id)
    REFERENCES department(id)
    ON DELETE SET NULL
);

CREATE TABLE employee (
  id INT NOT NULL AUTO_INCREMENT PRIMARY KEY, 
  first_name VARCHAR(30) NOT NULL,
  last_name VARCHAR(30) NOT NULL,
  employee_role VARCHAR(30) NOT NULL,
  their_dept VARCHAR(30) NOT NULL,
  salary VARCHAR(30) NOT NULL,
  manager VARCHAR(30) NOT NULL,
  role_id INT,
    FOREIGN KEY (role_id)
    REFERENCES job(id)
    ON DELETE SET NULL
);