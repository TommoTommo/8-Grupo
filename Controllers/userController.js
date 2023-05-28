const Data = require("../Data/data")
const userController = {
    register : function(req, res) {
        return res.render('register', {

        });
    },

    profile : function(req, res) {


        return res.render('profile', {


        });
    }
    
    ,
    profileedit : function(req, res) {
        return res.render('profileEdit', {

        });
    },
    profilelogin: function(req, res) {
        return res.render('login', {

//No borrar el codigo de abajo plzzz (28/5)
//clave correcta es un boolean que es true cuando el login es exitoso
//result es una varaible que que es un objeto que contiene la info del usario que se logeo de la databse
//     claveCorrecta= true;
//     result= "Thomas";
if (claveCorrecta) {
    
    
    req.session.user= result.dataValues;
}

        });
    }
}



module.exports = userController;