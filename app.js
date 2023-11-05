const express = require('express');
const app = express();
const port = 3000;

// Define o diretório de arquivos estáticos (por exemplo, arquivos CSS, JavaScript, imagens)
app.use(express.static('public'));

// Define uma rota para a página inicial
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/index.html');
});

// Inicia o servidor
app.listen(port, () => {
  console.log(`Servidor rodando`);
});