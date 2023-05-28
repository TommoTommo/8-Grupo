module.exports = function(sequelize, dataTypes) {
    
    let alias = "Product";

    let cols = {
        id:{
            autoIncrement: true,
            primaryKey: true,
            type: dataTypes.INTEGER,
        },
        nombre:{
            type: dataTypes.STRING,
        },
        imagen:{
            type: dataTypes.STRING,
        },
        FkUserId:{

            type: dataTypes.INTEGER,
        },


    };

    //nombre varchar(255) 
//descripcion varchar(255) 
//imagen varchar(255) 
//update_at timestamp 
//created_at timestamp 
//deleted_at timestamp 
//FkUserId int(11) UN
//

    let config = {
        tableName: 'productos',
        timestamps: false, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

    const product = sequelize.define(alias, cols, config);

      /* Crear relaciones */

        //relacion producto y usario A
        product.associate = function(models) {
        product.belongsTo(models.User, {
            as: "user1",
            foreignKey: "FkUserId"
        }),


       
        product.hasMany(models.Comment, {
                as: "comment2",
                foreignKey: "FkProdId"
        })



   };

    return product;
}

