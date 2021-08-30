const express = require('express');
const nunjucks = require('nunjucks');
const path = require('path');
const routes = require('./routes');


// Acá está la app de express
const app = express();
routes(app);

app.use(express.static("public"));
nunjucks.configure("views", {
    express: app,
    autoescape: true,
});
app.set("view engine", "njk");


app.listen(3000, () => {
    console.log("Escuchando en el puerto 3000");
});



