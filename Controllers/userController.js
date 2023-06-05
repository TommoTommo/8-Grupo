claveCorrecta= false
const Data = require("../Data/data")
/* let op = data.sequelize.op; */

const userController = {
    
    formRegister : function(req, res) {
        return res.render('register', {
            
        });
    },
    registerPost: (req, res) => {
      const info = req.body
      return res.redirect('/')
    },

    formLogin: function(req, res) {
      if (req.session.user != undefined) {
        return res.redirect('/movies/all');
    } else {
        return res.render('login');
    }
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
                    /* poner en session */
                    
                    req.session.user = result.dataValues;

                    if (req.body.rememberme != undefined) {
                        res.cookie('userId', result.id, {maxAge: 1000 * 60 * 15});
                    }
                   
                     return res.redirect('/movies/all');
                } else {
                    return res.send("Existe el mail y pero la password es incorrecta");
                }
            } else {
                return res.send("Noooo Existe el mail")
            }
            
        }).catch((err) => {
            console.log(err);
        });
       
    },

    profile : function(req, res) {

        //no se cual usar id1 o id2 , quiero acceder al id del usario en session.
      //no uso res porque es response
        let id2=req.session.user.id
        

        /* Crear relacion */
        let rel = {
          include: [{ association: "product" }, { association: "comment1" }],
        };

    
        User.findByPk(id, rel)
          .then(function (result) {
            
            return res.render("profile", {
              userdata: result,
            });
          })
          .catch(function (error) {
            console.log(error);
          });
      
    },

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