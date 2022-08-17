
const express = require('express');
const hbs = require('hbs');
require('dotenv').config();


const app = express();
const port = process.env.PORT;



//HANDLEBARS
app.set('view engine', 'hbs');
hbs.registerPartials(__dirname + '/views/partials');

//SERVIR CONTENIDO ESTATICO
app.use( express.static('public'));


app.get('/', (req, res) => {

    res.render('home', {

        nombre: 'Alvenis Becerra',
        titulo: 'Curso de NodeJs'
    });
});



app.listen(port, () => {

    console.log('Running in port', port);
});
