const mongoose = require('mongoose');
const HomeSchema = new mongoose.Schema({
    nome: {type: String, required: true},
    idade: Number,
    descricao: String
});

const HomeModel = mongoose.model('Home', HomeSchema);
class Home {

}

module.exports = Home;