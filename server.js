//arquivo que sobe o server na porta especificada
//o cors é necessário para que o front-end consiga acessar o back-end, deu um erro de cors quando 
//tentamos acessar o back-end sem ele

const express = require('express');
const cors = require('cors');
const routes = require('./src/api/routes');
const app = express();
const port = process.env.PORT || 3000;

app.use(cors());

routes(app);

app.listen(port, () => console.log(`Rodando na porta ${port}!`));

module.exports = app;