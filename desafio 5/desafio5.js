// Objeto que irá armazenar os itens agrupados por categoria
const listaDeCompras = {
    Frutas: [],
    Laticínios: [],
    Congelados: [],
    Doces: []
  };
  
  // Função para adicionar um item à lista de compras e agrupá-lo na categoria correta
  function adicionarItem() {
    const resposta = prompt("Deseja adicionar uma comida à lista de compras? (sim/não)");
  
    if (resposta.toLowerCase() === "sim") {
      const comida = prompt("Digite o nome da comida:");
      const categoria = prompt("Em qual categoria essa comida se encaixa? (Frutas/Laticínios/Congelados/Doces)").trim();
  
      if (listaDeCompras.hasOwnProperty(categoria)) {
        listaDeCompras[categoria].push(comida);
        console.log(`"${comida}" adicionado à categoria "${categoria}".`);
      } else {
        console.log("Categoria inválida. O item não foi adicionado à lista.");
      }
  
      adicionarItem(); // Chamada recursiva para adicionar mais itens até que a resposta seja "não"
    } else if (resposta.toLowerCase() === "não") {
      // Exibir a lista de compras agrupada por categoria
      console.log("Lista de compras:");
      for (const categoria in listaDeCompras) {
        console.log(`    ${categoria}: ${listaDeCompras[categoria].join(", ")}`);
      }
    } else {
      console.log("Resposta inválida. Por favor, digite 'sim' ou 'não'.");
      adicionarItem(); // Caso a resposta seja inválida, pedimos novamente até receber "sim" ou "não"
    }
  }
  
  // Iniciar o programa chamando a função para adicionar itens
  adicionarItem();