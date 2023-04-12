//ME FALTA IMPORTAR LA BASE DE DATOS

const userController = {
    register : function(req, res) {
        return res.render('user', {

            signedin: false,
            section:1
        });
    },

    profile : function(req, res) {
        return res.render('user', {

            signedin: true,
            section:2
        });
    }
    
    ,
    profileedit : function(req, res) {
        return res.render('user', {

            signedin: true,
            section:3
        });
    },
    profilelogin: function(req, res) {
        return res.render('user', {

            signedin: false,
            section:4
        });
    }
}

module.exports = userController;