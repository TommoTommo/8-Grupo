
const Data = require("../Data/data")


const indexController = {
    index : function(req, res) {
        listanames=[];
        listaimages=[];
        for (let index = 0; index < 8; index++) {
            
            let name = Data.productos[index].id;
            listanames.push(name);
            let image=Data.productos[index].image;
            listaimages.push(image)
        }
        

        return res.render('index', {
        names:lista,
        fotos: listaimages
        });
    },

    
    results : function(req, res) {
        return res.render('searchResults', {


        });
    }

}

module.exports = indexController;