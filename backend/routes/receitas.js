const express = require('express');
const router = express.Router();
const Receita = require('../models/Receita');

// Criar uma nova receita
router.post('/', async (req, res) => {
    const { nome, ingredientes, preparo } = req.body;
    const novaReceita = new Receita({ nome, ingredientes, preparo });
    await novaReceita.save();
    res.json(novaReceita);
});

// Listar todas as receitas
router.get('/', async (req, res) => {
    const receitas = await Receita.find();
    res.json(receitas);
});

// Atualizar uma receita
router.put('/:id', async (req, res) => {
    const { nome, ingredientes, preparo } = req.body;
    const receitaAtualizada = await Receita.findByIdAndUpdate(req.params.id, { nome, ingredientes, preparo }, { new: true });
    res.json(receitaAtualizada);
});

// Deletar uma receita
router.delete('/:id', async (req, res) => {
    await Receita.findByIdAndDelete(req.params.id);
    res.json({ message: 'Receita deletada com sucesso!' });
});

module.exports = router;
