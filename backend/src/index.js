const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');
const app = express();

app.use(cors())
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

// Controllers
require('./controllers/productController')(app);

// Rotas
app.use('/product',product)

app.listen(3010,() =>{

    console.log("The server is running on port 3010");

});