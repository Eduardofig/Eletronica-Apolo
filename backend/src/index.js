// Imports necessários
const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const product = require('./routes/product');
const user = require('./routes/user');
const cart = require('./routes/cart');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Controllers
require('./controllers/productController');
require('./controllers/userController');
require('./controllers/cartController');

// Services
require('./services/auth');

// Rotas
app.use('/cadastro',user);
app.use('/product',product);
app.use('/cart',cart);

// Servidor rodando
app.listen(3010,() =>{

    console.log("O servidor está rodando na porta 3010");

});