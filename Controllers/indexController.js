//HOLAAAAAAAAAAAAAAAAA

//hola


const db = require("../database/models")

let product= db.Product
let op = db.Sequelize.Op

const indexController = {

    index: (req, res) => {
     
        product.findAll()
        .then(function (result) {
          return res.render("index", { listaProductos: result });   
        })
        .catch(function (error) {
          console.log(error);
        });
        
      },
    

    
    find : function(req, res) {

        console.log("error");
       /*  product.findAll()
        .then(()=>{

        })
        .catch(() => {

        }) */

        return res.render('index');
    },

    //buscador
    results : function(req, res) {
        let busqueda = req.query.search
  
        

           product.findAll({
            where: [
              {
                [op.or]: [
                  { nombre: { [op.like]: "%" + busqueda + "%" } },
                  { descripcion: { [op.like]: "%" + busqueda + "%" } }
                ]
              }
            ],
            order: [['created_at', 'DESC']]
           })
           .then(function (result) {
 
          return res.render("searchResults", { listaProducts: result });
             })
             .catch(function (error) {
               console.log(error);
            })
           } 

         


    }


module.exports = indexController;