const HomeModel = require('../models/HomeModel');

HomeModel.create({
nome: 'Gustavin',
idade: 20,
descricao: 'Testeando a descrição'
})
.then(dados => console.log(dados))
.catch(e => console.log(e));


exports.paginaInicial = (req, res) =>{
    res.render('index');
    return;
};

exports.trataPost =(req, res) =>{
    res.send(req.body);
    return;
};