CREATE SCHEMA zapatillas;

USE zapatillas;

CREATE TABLE usuarios(
    id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT,
    nombre varchar(255) NOT NULL, 
    email varchar(255) UNIQUE NOT NULL,
    pass varchar(255) NOT NULL, 
    imagen varchar(255) NOT NULL, 
    updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP
);


CREATE TABLE productos(
    id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    nombre varchar(255) NOT NULL, 
    descripcion varchar(255) NOT NULL, 
    imagen varchar(255) NOT NULL, 
    updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    user_id INT(11) UNSIGNED NOT NULL, 
    FOREIGN KEY (user_id) REFERENCES usuarios(id)
);


CREATE TABLE comentarios(
    id int(11) UNSIGNED PRIMARY KEY AUTO_INCREMENT, 
    comentarios varchar(255) NOT NULL, 
    updated_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP, 
    created_at timestamp NOT NULL DEFAULT CURRENT_TIMESTAMP,
    deleted_at timestamp NULL DEFAULT NULL, 

    user_id INT(11) UNSIGNED NOT NULL,
    FOREIGN KEY (user_id) REFERENCES usuarios(id),

    product_id INT(11) UNSIGNED NOT NULL,
    FOREIGN KEY (product_id) REFERENCES productos(id)
);

INSERT INTO usuarios (nombre, email, pass, imagen) VALUES
("Teresa", "tere@gmail.com", "1234", "/images/users/default-image.png"),
("Thomas", "thomas@gmail.com", "1234", "/images/users/default-image.png"),
("Agustin", "agus@outlook.com", "1234", "/images/users/default-image.png"),
("Pedro", "pedro@hotmail.com", "1234", "/images/users/default-image.png"),
("Paula", "paula@yahoo.com", "1234", "/images/users/default-image.png");



INSERT INTO productos (nombre, descripcion, imagen, user_id) VALUES
("Nike Quest", "Zapatillas de running para hombre", "/images/products/img-nike-quest.png", 1),
("Jordan Air", "Zapatillas de running para hombre", "/images/products/img-jordan-air.png", 1),
("Adidas mujer forumlow", "Zapatillas de running para mujer", "/images/products/img-adidas-mujer-forumlow.png", 2),
("Adidas runfalcom", "Zapatillas de running para hombre", "/images/products/img-adidas-runfalcon.png", 3),
("Adidas running","Zapatillas de running para hombre","/images/products/img-adidas-running.png",3),
("Jordan Chicago","Zapatillas de running para hombre","/images/products/img-jordan-chicago.png",4),
("Nike Revolution","Zapatillas de running para hombre","/images/products/img-nike-revolution.png",4),
("Reebok Mujer","Zapatillas de running para mujer","/images/products/img-reebok-mujer.png",4);



INSERT INTO comentarios (comentarios, user_id, product_id) VALUES
("Muy buena calidad",1,1),
("Muy buena calidad",2,1),
("Buen producto",3,1),
("Excelente calidad",4,1),
("Excelente. Me la mordió el perro y sigue funcionando",1,2),
("Mala calidad",2,2),
("Pocas opciones de envío",3,2),
("Me encanto",4,2),
("Me vendieron las truchas",1,3),
("Muy buena calidad",2,3),
("Muy buena calidad",3,3),
("Buena la atención",4,3),
("Tardaron mucho en llegar",1,4),
("Buen servicio de envío",2,4),
("Me llegaron intactas. Gracias",3,4),
("Atención personalizada",4,4),
("Estoy muy contecta con lo que me llegó ",1,5),
("Muy buena calidad",2,5),
("Ansioso por volver a comprar con ustedes",3,5),
("Me llegaron en mal estado",4,5),
("Muy buena calidad",1,6),
("Muy buena calidad",2,6),
("Pésimo servicio",3,6),
("Muy buena calidad la del producto",4,6),
("No voy a volver a comprar sus productos",1,7),
("No me contestaron nunca. Pésima la atención",2,7),
("Muy descontenta con la compra",3,7),
("Me llego en otro talle, tuve que volver a enviarla",4,7),
("Era lo que esperaba",1,8),
("Sigo esperando una respuesta",2,8),
("Mala atención al cliente",3,8),
("Excelente calidad y servicio",4,8)