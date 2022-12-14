const express = require('express');
const bodyParser = require('body-parser');
const bcrypt = require('bcrypt');
const cookieParser = require('cookie-parser');
const sessions = require('express-session');

const app = express();

app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.set('view engine', 'ejs');

app.use('/public/', express.static('./public'));

const port = 3000;

app.get('/', (req, res) => {
    res.render('index')
});

app.listen(port, (req, res) => {
    console.log('¡Server up!');
})