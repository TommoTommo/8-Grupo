const indexController = {
    index : function(req, res) {
        return res.render('index', {

            signedin: false,
            section:1
        });
    },

    results : function(req, res) {
        return res.render('index', {

            signedin: false,
            section:2
        });
    }

}

module.exports = indexController;