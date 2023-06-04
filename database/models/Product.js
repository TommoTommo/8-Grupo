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
        descripcion:{
            type: dataTypes.STRING, 
        },
        imagen:{
            type: dataTypes.STRING,
        },
        update_at:{
            type: dataTypes.DATE,
        },
        created_at:{
            type: dataTypes.DATE,
        },
        user_id:{

            type: dataTypes.INTEGER,
        }


    };



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
            foreignKey: "user_id"
        }),


       
        product.hasMany(models.Comment, {
                as: "comment2",
                foreignKey: "product_id"
        })

   };

    return product;
}

