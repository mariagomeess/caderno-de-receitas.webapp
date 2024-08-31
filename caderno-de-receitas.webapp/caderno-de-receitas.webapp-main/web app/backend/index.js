document.getElementById('nova-receita-form').addEventListener('submit', async function(e) {
    e.preventDefault();

    const nome = document.getElementById('nome-receita').value;
    const ingredientes = document.getElementById('ingredientes').value;
    const preparo = document.getElementById('preparo').value;

    const response = await fetch('http://localhost:5000/api/receitas', { 
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify({ nome, ingredientes, preparo })
    });

    const novaReceita = await response.json();
    addReceitaToList(novaReceita);
    this.reset();
});

// Função para buscar todas as receitas
async function fetchReceitas() {
    const response = await fetch('http://localhost:5000/api/receitas');
    const receitas = await response.json();
    receitas.forEach(addReceitaToList);
}

// Função para adicionar uma receita à lista
function addReceitaToList(receita) {
    const receitaItem = document.createElement('li');
    receitaItem.textContent = `${receita.nome} - Ingredientes: ${receita.ingredientes} - Preparo: ${receita.preparo}`;
    document.getElementById('receitas').appendChild(receitaItem);
}

// Busca receitas ao carregar a página
fetchReceitas();
