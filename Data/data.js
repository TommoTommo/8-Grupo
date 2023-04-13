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
];



module.exports = listaDeZapatillas;