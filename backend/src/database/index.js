const mongoose = require('mongoose');
mongoose.Promise = global.Promise;

mongoose.connect("mongodb://localhost/eletronica_apolo_web", {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  useCreateIndex: true,
  useFindAndModify: false },
  ()=>console.log("Conectado ao MongoDB"));

module.exports = mongoose;