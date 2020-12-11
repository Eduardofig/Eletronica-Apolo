// Inicialização do banco de dados
const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb+srv://admin:pivete@eletronica-apollo.63ug4.mongodb.net/eletronica-apollo?retryWrites=true&w=majority", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false },
  ()=>console.log("Conectado ao MongoAtlas"));

module.exports = mongoose;
