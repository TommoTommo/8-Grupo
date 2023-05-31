//HOLAAAAAAAAAAAAAAAAA


const db = require("../database/models")

let product= db.Product
let op = db.Sequelize.Op

const indexController = {
    index : function(req, res) {

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
                 { name: { [op.like]: "%" + busqueda + "%" } },
              ],
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