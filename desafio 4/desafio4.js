function guessGame() {
    // Número pré-definido entre 0 e 10
    const numberToGuess = Math.floor(Math.random() * 11);
  
    // Número máximo de tentativas
    const maxAttempts = 3;
    let attemptsLeft = maxAttempts;
  
    function checkGuess(guess) {
      if (guess === numberToGuess) {
        console.log("Parabéns! Você acertou!");
      } else {
        attemptsLeft--;
        if (attemptsLeft > 0) {
          console.log(`Você errou. Tente novamente. Tentativas restantes: ${attemptsLeft}`);
          askForGuess();
        } else {
          console.log(`Suas tentativas acabaram. O número era ${numberToGuess}.`);
        }
      }
    }
  
    function askForGuess() {
      const guess = prompt("Digite um número entre 0 e 10:");
      if (guess === null || guess.trim() === "") {
        return; // Trata caso o usuário clique em cancelar ou não insira um valor
      }
      const parsedGuess = parseInt(guess, 10);
      if (isNaN(parsedGuess) || parsedGuess < 0 || parsedGuess > 10) {
        console.log("Entrada inválida. Digite um número inteiro entre 0 e 10.");
        askForGuess();
      } else {
        checkGuess(parsedGuess);
      }
    }
  
    askForGuess();
  }
  
  guessGame();