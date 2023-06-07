claveCorrecta= false
const db = require("../database/models")

let user = db.User
let op = db.Sequelize.Op
/* let op = data.sequelize.op; */

const userController = {
    
    formRegister : function(req, res) {
        return res.render('register', {

        });
    },
    registerPost: (req, res) => {
        let info = req.body;

        let userStore = {
            name: info.name,
            email: info.email,
            password: bcrypt.hashSync(info.password, 10),
            remember_token: ""
        }

  
        user.create(userStore)
        .then(function(result) {
            return res.redirect('/users/login');
        })
        .catch(function(error) {
            console.log(error);
        });
    
    
    },

    formLogin: function(req, res) {
      return res.render('login')
  },
  loginPost: function(req, res) {
      let emailBuscado = req.body.email;
      let pass = req.body.password;

      let filtrado = {
          where: [{email: emailBuscado}]
      };
      user.findOne(filtrado)
      .then((result) => {

          if (result != null) {
              let claveCorrecta = bcrypt.compareSync(pass, result.password)
              if (claveCorrecta) {
                  //session 
                  return res.send("Existe el email y la password es correcta");
              } else {
                  return res.send("Existe el email, pero la password es incorrecta");
              }
          } else {
              return res.send("No Existe el email ingresado")
          }
          
      }).catch((err) => {
          console.log(err);
      });
  }, 

    profile : function(req, res) {
            //SACO EL ! DEL != undefined PORQUE TODAVIA NO SE PEDUE INICIAR SECION
            // if (req.session.user = undefined) {

              //let id=req.session.user.id
              let id2= 1
            
    
              /* Crear relacion */
              let rel = {
                include: [{ association: "product" }],
              };
      
              
              user.findByPk(id2, rel)
              
                .then(function (result) {
                  console.log(result);
                  return res.render("profile", {
                    userdata: result,
                  });
                })
                .catch(function (error) {
                  console.log(error);
                });
            // }else{
            //   return res.redirect("/users/login");
            // }
    
           
     
    
        }
    
    ,
    profileedit : function(req, res) {
        return res.render('profileEdit', {

        });
    },
//     profilelogin: function(req, res) {
//         return res.render('login', {

// //No borrar el codigo de abajo plzzz (28/5)
// //clave correcta es un boolean que es true cuando el login es exitoso
// //result es una varaible que que es un objeto que contiene la info del usario que se logeo de la databse
// //     claveCorrecta= true;
// //     result= "'1', 'Teresa', 'tere@gmail.com', '1234', 'default-image.png', '2023-05-20 21:58:56', '2023-05-20 21:58:56', NULL

// if (claveCorrecta) {
    
//     req.session.user= result.dataValues;
// }

//         });
//     }
}



module.exports = userController;