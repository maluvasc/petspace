const express = require('express');
const routes = require('./src/api/routes');
const app = express();
const port = process.env.PORT || 3000;

routes(app);

app.listen(port, () => console.log(`Rodando na porta ${port}!`));

module.exports = app;