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

INSERT INTO usuarios (nombre, email, pass, foto) VALUES
("Teresa", "tere@gmail.com", "1234", "default-image.png"),
("Thomas", "thomas@gmail.com", "1234", "default-image.png"),
("Agustin", "agus@outlook.com", "1234", "default-image.png"),
("Pedro", "pedro@hotmail.com", "1234", "default-image.png"),
("Paula", "paula@yahoo.com", "1234", "default-image.png");

INSERT INTO productos (nomnbre, descripcion, imagen, FkUserId) VALUES
("Nike Quest", "Zapatillas de running para hombre", "img-nike-quest.png", 1),
("Jordan Air", "Zapatillas de running para hombre", "img-jordan-air.png", 1),
("Adidas mujer forumlow", "Zapatillas de running para mujer", "img-adidas-forumlow.png", 2),
("Adidas runfalcom", "Zapatillas de running para hombre", "img-adidas-runfalcon.png", 3),
("Adidas running","Zapatillas de running para hombre","img-adidas-running.png",3),
("Jordan Chicago","Zapatillas de running para hombre","img-jordan-chicago.png",4),
("Nike Revolution","Zapatillas de running para hombre","img-nike-revolution.png",4),
("Reebok Mujer","Zapatillas de running para mujer","img-reebok-mujer.png",4);

INSERT INTO comentarios (comentario, FkUserId, FkProdId) VALUES
("Muy buena calidad",1,1), //primer numero: id del usuario que comento y el seg: id del producto
("Muy buena calidad",2,1),
("Muy buena calidad",3,1),
("Muy buena calidad",4,1),
("Muy buena calidad",1,2),
("Muy buena calidad",2,2),
("Muy buena calidad",3,2),
("Muy buena calidad",4,2),
("Muy buena calidad",1,3),
("Muy buena calidad",2,3),
("Muy buena calidad",3,3),
("Muy buena calidad",4,3),
("Muy buena calidad",1,4),
("Muy buena calidad",2,4),
("Muy buena calidad",3,4),
("Muy buena calidad",4,4),
("Muy buena calidad",1,5),
("Muy buena calidad",2,5),
("Muy buena calidad",3,5),
("Muy buena calidad",4,5),
("Muy buena calidad",1,6),
("Muy buena calidad",2,6),
("Muy buena calidad",3,6),
("Muy buena calidad",4,6),
("Muy buena calidad",1,7),
("Muy buena calidad",2,7),
("Muy buena calidad",3,7),
("Muy buena calidad",4,7),
("Muy buena calidad",1,8),
("Muy buena calidad",2,8),
("Muy buena calidad",3,8),
("Muy buena calidad",4,8);