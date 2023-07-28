// Função para exibir as opções disponíveis e obter a escolha do usuário
function exibirOpcoes() {
    console.log("\nOpções disponíveis:");
    console.log("1. Soma");
    console.log("2. Subtração");
    console.log("3. Multiplicação");
    console.log("4. Divisão");
    console.log("5. Sair");
    return prompt("Escolha uma opção (1/2/3/4/5): ");
  }
  
  // Função para realizar a soma
  function soma(a, b) {
    return a + b;
  }
  
  // Função para realizar a subtração
  function subtracao(a, b) {
    return a - b;
  }
  
  // Função para realizar a multiplicação
  function multiplicacao(a, b) {
    return a * b;
  }
  
  // Função para realizar a divisão
  function divisao(a, b) {
    return a / b;
  }
  
  // Função principal da calculadora
  function calculadora() {
    let opcao;
    do {
      opcao = exibirOpcoes();
      switch (opcao) {
        case "1":
          const num1 = parseFloat(prompt("Digite o primeiro valor: "));
          const num2 = parseFloat(prompt("Digite o segundo valor: "));
          console.log(`Resultado da soma: ${soma(num1, num2)}`);
          break;
        case "2":
          const num3 = parseFloat(prompt("Digite o primeiro valor: "));
          const num4 = parseFloat(prompt("Digite o segundo valor: "));
          console.log(`Resultado da subtração: ${subtracao(num3, num4)}`);
          break;
        case "3":
          const num5 = parseFloat(prompt("Digite o primeiro valor: "));
          const num6 = parseFloat(prompt("Digite o segundo valor: "));
          console.log(`Resultado da multiplicação: ${multiplicacao(num5, num6)}`);
          break;
        case "4":
          const num7 = parseFloat(prompt("Digite o primeiro valor: "));
          const num8 = parseFloat(prompt("Digite o segundo valor: "));
          console.log(`Resultado da divisão: ${divisao(num7, num8)}`);
          break;
        case "5":
          console.log("Até a próxima!");
          break;
        default:
          console.log("Opção inválida. Por favor, escolha uma opção válida.");
          break;
      }
    } while (opcao !== "5");
  }
  
  // Iniciar a calculadora chamando a função principal
  calculadora();
  