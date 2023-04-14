const Data = require("../Data/data")


const productController = {
    add : function(req, res) {
        return res.render('productAdd', {


        });
    },
    products : function(req, res) {
        listanames=[];
        listaimages=[];
        listacomments=[];
        for (let index = 0; index < 5; index++) {
            
            let name = Data.comentarios[index].nombre;
            listanames.push(name);
            let image=Data.comentarios[index].imagen;
            listaimages.push(image);
            let comment=Data.comentarios[index].comentario;
            listacomments.push(comment)
        return res.render('product', {
            names:listanames,
            images:listaimages,
            comments:listacomments

        });
    }



}
}

module.exports = productController;