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

const session = require('express-session');
const MongoStore = require('connect-mongo');
const flash = require('connect-flash');

const port = 4000;
const routes = require('./routes');
const path = require('path');
const meuMiddleware = require('./src/middlewares/middleare');

app.use(express.urlencoded({extended: true}));

app.use(express.static(path.resolve(__dirname, 'public')));

const sessionOptions = session ({
    secret: 'knknsuahuihasuhwuoid000002122222 nbiuohuoquuqwd22000',
    store: MongoStore.create({ mongoUrl: process.env.CONNECTIONSTRING }),
    resave: false,
    saveUninitialized: false,
    cookie: {
        maxAge: 100 * 60 * 60 * 24 * 7,
        httpOnly: true
    }
});
app.use(sessionOptions);
app.use(flash());


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
