const express = require('express');
const app = express();
const port = 4000;

app.use(
    express.urlencoded(
        {extended: true}));

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`);
});

app.post('/', (req, res) => {
    console.log(req.body);
    
res.send(`Você enviou: ${req.body.nome}`)
});

app.get('/teste/:idUsuarios?', (req, res) => {
    console.log(req.params);
    console.log(req.query);
    
    
    res.send(req.params.idUsuarios)
})

app.listen(port, () => {
    console.log('Acessar http://localhost:4000');
    
    console.log('Servidor executando na porta 4000');
    
});