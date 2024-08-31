const mongoose = require('mongoose');

const ReceitaSchema = new mongoose.Schema({
    nome: { 
        type: String, 
        required: true 
    },
    ingredientes: { 
        type: String, required: true 
    },
    preparo: { 
        type: String, required: true 
    }
});

module.exports = mongoose.model('Receita', ReceitaSchema);
