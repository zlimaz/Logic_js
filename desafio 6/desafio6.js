// Objeto que irá armazenar os itens agrupados por categoria
const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: []
  };
  
  // Função para adicionar um item à lista de compras e agrupá-lo na categoria correta
  function adicionarItem() {
    const resposta = prompt("Deseja adicionar uma comida à lista de compras? (sim/não/remover)");
  
    if (resposta.toLowerCase() === "sim") {
      const comida = prompt("Digite o nome da comida:");
      const categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas/Laticínios/Congelados/Doces)").trim();
  
      if (listaDeCompras.hasOwnProperty(categoria)) {
        listaDeCompras[categoria].push(comida);
        console.log(`"${comida}" adicionado à categoria "${categoria}".`);
      } else {
        console.log("Categoria inválida. O item não foi adicionado à lista.");
      }
  
      adicionarItem(); // Chamada recursiva para adicionar mais itens até que a resposta seja "não" ou "remover"
    } else if (resposta.toLowerCase() === "remover") {
      const todosOsItens = Object.values(listaDeCompras).flat();
  
      if (todosOsItens.length === 0) {
        console.log("A lista de compras está vazia. Não há itens para remover.");
        adicionarItem(); // Voltar ao ciclo inicial de perguntas
        return;
      }
  
      console.log("Itens na lista de compras:", todosOsItens.join(", "));
      const itemRemover = prompt("Digite o nome do item que deseja remover:");
  
      let removido = false;
      for (const categoria in listaDeCompras) {
        const index = listaDeCompras[categoria].indexOf(itemRemover);
        if (index !== -1) {
          listaDeCompras[categoria].splice(index, 1);
          console.log(`"${itemRemover}" foi removido da lista de compras.`);
          removido = true;
          break;
        }
      }
  
      if (!removido) {
        console.log("Não foi possível encontrar o item dentro da lista!");
      }
  
      adicionarItem(); // Voltar ao ciclo inicial de perguntas
    } else if (resposta.toLowerCase() === "não") {
      // Exibir a lista de compras agrupada por categoria
      console.log("Lista de compras:");
      for (const categoria in listaDeCompras) {
        console.log(`    ${categoria}: ${listaDeCompras[categoria].join(", ")}`);
      }
    } else {
      console.log("Resposta inválida. Por favor, digite 'sim', 'não' ou 'remover'.");
      adicionarItem(); // Caso a resposta seja inválida, pedimos novamente até receber "sim", "não" ou "remover"
    }
  }
  
  // Iniciar o programa chamando a função para adicionar itens
  adicionarItem();
  