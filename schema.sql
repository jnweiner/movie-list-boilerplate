CREATE DATABASE movies;

USE movies;

CREATE TABLE movies (
  id INT AUTO_INCREMENT PRIMARY KEY,
  watched INT,
  title VARCHAR(250),
  year INT,
  runtime INT,
  poster VARCHAR(250),
  rating DECIMAL(10, 2)
);

