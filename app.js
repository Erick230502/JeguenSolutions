// app.js
const express = require('express');
const app = express();
const expressLayouts = require('express-ejs-layouts');
const path = require('path');

// Configuraciones de Express y EJS
app.use(expressLayouts);
app.set('view engine', 'ejs');
app.set('views', path.join(__dirname, 'views')); 

app.set('layout', 'layouts/layout'); 

// Servir archivos estáticos (CSS, imágenes, JS del cliente)
app.use(express.static(path.join(__dirname, 'public')));

// Rutas
app.get('/', (req, res) => {
    res.render('index', { title: 'INICIO | JEGUEN SOLUTIONS' });
});

// **Ruta corregida para la página de limpieza**
// Ahora apunta a la subcarpeta 'servicios'
app.get('/limpieza', (req, res) => {
    res.render('servicios/limpieza', { title: 'Limpieza | JEGUEN SOLUTIONS' });
});

// Iniciar servidor
const PORT = process.env.PORT || 3000; // O cualquier otro puerto por defecto para tu desarrollo local
app.listen(PORT, () => {
    console.log(`Servidor escuchando en el puerto ${PORT}`);
});