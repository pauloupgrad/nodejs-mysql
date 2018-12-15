const Sequelize = require('sequelize');

//Conexão com Banco de dados        
const sequelize = new Sequelize('appblog', 'admin', '275293ok', {
    host: 'localhost',
    dialect: 'mysql'    
}); 

module.exports = {
    Sequelize: Sequelize,
    sequelize: sequelize
}