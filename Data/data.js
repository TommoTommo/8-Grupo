let listaDeZapatillas = [
    {
        //("Teresa","tere@gmail.com","1234","default-image.png"),
        //("Nike Quest","Zapatillas de running para hombre","img-nike-quest.png",1),
        
        id: 1,
        nombre: "Nike Quest",
        descripcion: "Zapatillas de vestir para mujer",
        imagen: "img-nike-quest.png",
        fechaDeCarga: "2023-04-13", 
        vendedor: {
            id: 1,
            nombre: "Teresa",
            email: "tere@gmail.com", 
            pass: "1234", 
            foto: "default-image.png", 
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                //("Muy buena calidad",1,1),
                
                id: 1, 
                comentario: "Muy buena calidad",
                usuario: {
                    id: 1, 
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png", 
                    fechaDeCarga: "2023-04-13", 
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                //("Muy buena calidad",1,2),
                
                id: 2,
                comentatio: "Muy buena calidad",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                //("Muy buena calidad",1,3),
                
                id: 3,
                comentatio: "Buen producto",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
               //("Muy buena calidad",1,4),
                
                id: 4,
                comentatio: "Excelente calidad",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
    {
        id: 2,
        nombre: "Jordan Air",
        descripcion: "Zapatillas de running para hombre",
        imagen: "img-jordan-air.png",
        fechaDeCarga: "2023-04-13",
        vendedor: {
            id: 1,
            nombre: "Teresa",
            email: "tere@gmail.com",
            pass: "1234",
            foto: "default-image.png",
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                id: 5,
                comentatio: "Excelente. Me la mordió el perro y sigue funcionando",
                usuario: {
                    id: 1,
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 6,
                comentatio: "Mala calidad",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 7,
                comentatio: "Pocas opciones de envío",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 8,
                comentatio: "Me encantó",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
    {
        id: 3,
        nombre: "Adidas mujer forumlow",
        descripcion: "Zapatillas de running para mujer",
        imagen: "img-adidas-forumlow.png",
        fechaDeCarga: "2023-04-13",
        vendedor: {
            id: 2,
            nombre: "Thomas",
            email: "thomas@gmail.com",
            pass: "1234",
            foto: "default-image.png",
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                id: 9,
                comentatio: "Me vendieron las truchas",
                usuario: {
                    id: 1,
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 10,
                comentatio: "Muy buena calidad",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 11,
                comentatio: "Muy buena calidad",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 12,
                comentatio: "Buena la atención",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
    {
        id: 4,
        nombre: "Adidas runfalcon",
        descripcion: "Zapatillas de running para hombre",
        imagen: "img-adidas-runfalcon.png",
        fechaDeCarga: "2023-04-13",
        vendedor: {
            id: 3,
            nombre: "Agustín",
            email: "agus@outlook.com",
            pass: "1234",
            foto: "default-image.png",
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                id: 13,
                comentatio: "Tardaron mucho en llegar",
                usuario: {
                    id: 1,
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 14,
                comentatio: "Buen servicio de envío",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 15,
                comentatio: "Me llegaron intactas. Gracias",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 16,
                comentatio: "Atención personalizada",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
    {
        id: 5,
        nombre: "Adidas running",
        descripcion: "Zapatillas de running para hombre",
        imagen: "img-adidas-running.png",
        fechaDeCarga: "2023-04-13",
        vendedor: {
            id: 3,
            nombre: "Agustín",
            email: "agus@outlook.com",
            pass: "1234",
            foto: "default-image.png",
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                id: 17,
                comentatio: "Estoy muy contenta con lo que me llegó",
                usuario: {
                    id: 1,
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 18,
                comentatio: "Muy buena calidad",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 19,
                comentatio: "Ansioso por volver a comprar con ustedes",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 20,
                comentatio: "Me llegaron en mal estado",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
    {
        id: 6,
        nombre: "Jordan Chicago",
        descripcion: "Zapatillas de running para hombre",
        imagen: "img-jordan-chicago.png",
        fechaDeCarga: "2023-04-13",
        vendedor: {
            id: 4,
            nombre: "Pedro",
            email: "pedro@hotmail.com",
            pass: "1234",
            foto: "default-image.png",
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                id: 21,
                comentatio: "Muy buena calidad",
                usuario: {
                    id: 1,
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 22,
                comentatio: "Muy buena calidad",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 23,
                comentatio: "Pésimo servicio",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 24,
                comentatio: "Muy buena calidad la del producto",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
    {
        id: 7,
        nombre: "Nike Revolution",
        descripcion: "Zapatillas de running para hombre",
        imagen: "img-nike-revolution.png",
        fechaDeCarga: "2023-04-13",
        vendedor: {
            id: 4,
            nombre: "Pedro",
            email: "pedro@hotmail.com",
            pass: "1234",
            foto: "default-image.png",
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                id: 25,
                comentatio: "no voy a volver a comprar sus productos",
                usuario: {
                    id: 1,
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 26,
                comentatio: "No me contestaron nunca. Pésima la atención",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 27,
                comentatio: "Muy descontenta con la compra",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 28,
                comentatio: "Me llego en otro talle, tuve que volver a enviarla",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
    {
        id: 8,
        nombre: "Reebok Mujer",
        descripcion: "Zapatillas de running para mujer",
        imagen: "img-reebok-mujer.png",
        fechaDeCarga: "2023-04-13",
        vendedor: {
            id: 4,
            nombre: "Pedro",
            email: "pedro@hotmail.com",
            pass: "1234",
            foto: "default-image.png",
            fechaDeCarga: "2023-04-13",
        },
        comentarios: [
            {
                id: 29,
                comentatio: "Era lo que esperaba",
                usuario: {
                    id: 1,
                    nombre: "Teresa",
                    email: "tere@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 30,
                comentatio: "Sigo esperando una respuesta",
                usuario: {
                    id: 2,
                    nombre: "Thomas",
                    email: "thomas@gmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 31,
                comentatio: "Mala atención al cliente",
                usuario: {
                    id: 3,
                    nombre: "Agustín",
                    email: "agus@outlook.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
            {
                id: 32,
                comentatio: "Excelente calidad y servicio",
                usuario: {
                    id: 4,
                    nombre: "Pedro",
                    email: "pedro@hotmail.com",
                    foto: "default-image.png",
                    fechaDeCarga: "2023-04-13",
                },
                fechaDeCarga: "2023-04-13",
            },
        ]
    },
];



module.exports = listaDeZapatillas;