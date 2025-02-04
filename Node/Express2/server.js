//Utilizando o Nodemon

const express = require('express');
const app = express();
const port = 4000;

app.get('/', (req, res) => {
    res.send(`
        <form action="/" method="POST">
        Nome: <input type="text" name="nome">
        <button>Enviar</button>
        </form>`);
});

app.post('/', (req, res) => {
res.send('Recebi o formulário')
});

app.get('/contato', (resq, res) => {
res.send('Obrigado por entrar em contato com a gente.')
})

app.listen(port, () => {
    console.log('Acessar http://localhost:4000');
    
    console.log('Servidor executando na porta 4000');
    
});