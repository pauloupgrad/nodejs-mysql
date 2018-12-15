const express = require('express');
const app = express();
const porta = 8081;
const handlebars = require('express-handlebars');

//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Conexão com Banco de dados
        const Sequelize = require('sequelize');
        const sequelize = new Sequelize('teste', 'admin', '275293ok', {
            host: 'localhost',
            dialect: 'mysql'    
        });    

app.listen(porta, () => {
    console.log("Servidor rodando na url http://localhost:"+porta);
});