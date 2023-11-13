const express = require('express');
const path = require('path');
const hbs = require("hbs");

const app = express();
const port = process.env.PORT;

app.set("view engine", "hbs");

hbs.registerPartials(__dirname+("/views/partials"))

// Middleware para servir archivos estáticos (CSS, imágenes, etc.)
app.use('/public', express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
  res.render('home');
})

app.get('/pastor_aleman', (req, res) => {
  res.render('pastor_aleman');
})

app.get('/chihuahua', (req, res) => {
  res.render('chihuahua');
})

// Iniciar el servidor
app.listen(port, () => {
  console.log(`Servidor en ejecución en http://localhost:${port}`);
});
