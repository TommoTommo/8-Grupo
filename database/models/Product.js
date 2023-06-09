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
        user_id:{
            type: dataTypes.INTEGER,
        }, 
        created_at:{
            type: dataTypes.DATE,
        },
        updated_at:{
            type: dataTypes.DATE,
        }


    };

    //nombre varchar(255) 
//descripcion varchar(255) 
//imagen varchar(255) 
//updated_at timestamp 
//created_at timestamp 
//deleted_at timestamp 
//FkUserId int(11) UN.
//

    let config = {
        tableName: 'productos',
        timestamps: true, //Si la tabla no tiene los campos created_at y updated_at
        underscored: true, //Si los nombres de las columnas en la db tienen guiones bajos en lugar de camelCase.
    };

   let Product = sequelize.define(alias, cols, config);

Product.associate = function(models) {
    Product.belongsTo(models.User, {
        as: 'user1',
        foreignKey: 'user_id',
    });
    Product.hasMany(models.Comment, {
        as: 'comment2',
        foreignKey: 'product_id',
          
        });
      };
  

    return Product;
}

