CREATE DATABASE 'zapatillas'; 

USE 'zapatillas'; 

CREATE TABLE usuarios(
    id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(255) NOT NULL, 
    pass varchar(255) NOT NULL, 
    foto varchar(255) NOT NULL, 
    update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
);