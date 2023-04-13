CREATE DATABASE 'zapatillas'; 

USE 'zapatillas'; 

CREATE TABLE usuarios(
    id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(255) NOT NULL, 
    email varchar(255) NOT NULL,
    pass varchar(255) NOT NULL, 
    foto varchar(255) NOT NULL, 
    update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    deleted_at timestamp NULL DEFAULT NULL
);


CREATE TABLE productos(
    id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    nombre varchar(255) NOT NULL, 
    descripcion varchar(255) NOT NULL, 
    imagen varchar(255) NOT NULL, 
    update_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP, 
    deleted_at timestamp NULL DEFAULT NULL, 

    FkUserId INT(11) UNSIGNED NOT NULL, 
    FOREIGN KEY (FkUserId) REFERENCES usuarios(id)
);


CREATE TABLE comentarios(
    id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    comentarios varchar(255) NOT NULL, 
    update_at timestamp NOT NULL DEFAULT CURRENT TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    create_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp NULL DEFAULT NULL, 

    FkUserId INT(11) UNSIGNED NOT NULL,
    FOREIGN KEY (FkUserId) REFERENCES usuarios(id),

    FkProdId INT(11) UNSIGNED NOT NULL,
    FOREIGN KEY (FkpRODid) REFERENCES productos(id)
);