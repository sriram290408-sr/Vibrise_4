CREATE DATABASE viberise_db;

USE viberise_db;

CREATE TABLE users (
    id INT AUTO_INCREMENT PRIMARY KEY,
    email VARCHAR(255) UNIQUE NOT NULL,
    password VARCHAR(255) NOT NULL
);

INSERT INTO users (email, password) VALUES ("test@viberise.com", "12345");
