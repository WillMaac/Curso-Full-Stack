require('dotenv').config();

const express = require('express');
const app = express();
const mongoose = require('mongoose');

mongoose.connect(process.env.CONNECTIONSTRING, {useNewUrlParser: true, useUnifiedTopology: true})
.then(() => {
    console.log('Conectei á base de dados.');
    
    app.emit('pronto')
})
.catch(e => console.log(e));


const port = 4000;
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleare')

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

app.set('views', path.resolve(__dirname, 'src', 'views'));
app.set('view engine', 'ejs');

app.use(meuMiddleware);

app.use(routes);

app.on('pronto', () => {
    app.listen(port, () => {
        console.log('Acessar http://localhost:4000');
        
        console.log('Servidor executando na porta 4000');  
    });
});
