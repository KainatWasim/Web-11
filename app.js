var secretNumber = Math.trunc(Math.random() * 20) + 1;
    var score = 20;
    var highScore = 0;

    function displayMessage(msg) {
      document.getElementById("message").textContent = msg;
    }

    function checkGuess() {
      const guess = Number(document.getElementById("guess").value);

      if (!guess) {
        displayMessage("⛔ Enter a number!");
      } else if (guess === secretNumber) {
        displayMessage("🎉 Correct Number!");
        document.getElementById("secret").textContent = secretNumber;
        document.body.style.background = "linear-gradient(135deg, #28a745, #218838)";

        if (score > highScore) {
          highScore = score;
          document.getElementById("highScore").textContent = highScore;
        }
      } else if (guess !== secretNumber) {
        if (score > 1) {
          displayMessage(guess > secretNumber ? "📈 Too High!" : "📉 Too Low!");
          score--;
          document.getElementById("score").textContent = score;
        } else {
          displayMessage("💥 You lost the game!");
          document.getElementById("score").textContent = 0;
        }
      }
    }

    function resetGame() {
      score = 20;
      secretNumber = Math.trunc(Math.random() * 20) + 1;
      document.getElementById("score").textContent = score;
      document.getElementById("message").textContent = "Guess Number ....";
      document.getElementById("secret").textContent = "?";
      document.getElementById("guess").value = "";
      document.body.style.background = "linear-gradient(135deg, #2c1677, #252570, #1a1a40)";
    }
  