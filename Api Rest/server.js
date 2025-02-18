import app from './app.js';

const port = process.env.PORT || 3001;
app.listen(port, () => {
  console.log(`Escutando na porta ${port}`);
  console.log(`CTRL + Clique em http://localhost:${port}`);
});
