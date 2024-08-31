document.getElementById('nova-receita-form').addEventListener('submit', function(e) {
                    e.preventDefault();
                
                    const nomeReceita = document.getElementById('nome-receita').value;
                    const ingredientes = document.getElementById('ingredientes').value;
                    const preparo = document.getElementById('preparo').value;
                
                    const receitaItem = document.createElement('li');
                    receitaItem.textContent = `${nomeReceita} - Ingredientes: ${ingredientes} - Preparo: ${preparo}`;
                
                    document.getElementById('receitas').appendChild(receitaItem);
                
                    this.reset();
                });
                
