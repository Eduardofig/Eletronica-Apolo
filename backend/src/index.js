const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();
const product = require('./routes/product');
const user = require('./routes/user');

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Controllers
require('./controllers/productController')(app);
require('./controllers/userController')(app);

// Rotas
app.use('/product',product)
app.use('/auth/cadastro',user)

app.listen(3010,() =>{

    console.log("The server is running on port 3010");

});