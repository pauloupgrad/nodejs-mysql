const express = require('express');
const app = express();
const porta = 8081;
const handlebars = require('express-handlebars');
const bodyParser = require('body-parser');


//Config
    //Template Engine
        app.engine('handlebars', handlebars({defaultLayout: 'main'}));
        app.set('view engine', 'handlebars');
    //Body Parser
        app.use(bodyParser.urlencoded({extended: false})); 
        app.use(bodyParser.json());   
    
        
//Rotas
        app.get('/cad', (req, res) => {
            res.render('formulario');
        });

        //receber dados da postagem
        app.post('/addPost', (req, res) => {

            res.send("Titulo: "+req.body.titulo+"<br> Conteúdo: "+req.body.conteudo);
        });



app.listen(porta, () => {
    console.log("Servidor rodando na url http://localhost:"+porta);
});