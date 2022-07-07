const { DataTypes } = require('sequelize');
const Sequelize = require('../db');

const product = Sequelize.define('product',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    description:{
        type: DataTypes.STRING,
        allowNull:true
    },
    img:{
        type: DataTypes.STRING, 
    },
    price:{
        type: DataTypes.FLOAT,
        allowNull:false
    }
});

const shop = Sequelize.define('shop',{
    id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        unique:true,
        allowNull:false
    }
});


const order = Sequelize.define('order',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },
    name: {
        type: DataTypes.STRING,
        allowNull:false
    },
    address: {
        type: DataTypes.STRING,
        allowNull:false
    },
    phone: {
        type: DataTypes.STRING,
        allowNull:false
    },
    email: {
        type: DataTypes.STRING,
        allowNull:false
    },
});

const productOrder = Sequelize.define('productOrder',{
    id:{
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true
    },    
    price:{
        type: DataTypes.FLOAT,
        allowNull:false
    },
    count:{
        type: DataTypes.FLOAT,
        allowNull:false
    },

});


shop.hasMany(product);
product.belongsTo(shop);

order.hasMany(productOrder);
productOrder.belongsTo(order);

productOrder.belongsTo(product)

module.exports = {shop, product, order, productOrder}