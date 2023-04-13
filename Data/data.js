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
               //("Muy buena calidad",1,4),
                
                id: 4,
                comentatio: "Muy buena calidad",
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
                id: 6,
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
                id: 7,
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
                id: 8,
                comentatio: "Muy buena calidad",
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
                comentatio: "Muy buena calidad",
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
                id: 14,
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
                id: 15,
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
                id: 16,
                comentatio: "Muy buena calidad",
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
                id: 20,
                comentatio: "Muy buena calidad",
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
                id: 24,
                comentatio: "Muy buena calidad",
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
                id: 26,
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
                id: 27,
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
                id: 28,
                comentatio: "Muy buena calidad",
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
                id: 30,
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
                id: 31,
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
                id: 32,
                comentatio: "Muy buena calidad",
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