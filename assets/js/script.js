document.addEventListener("DOMContentLoaded", function() {
    let buttons = document.getElementsByTagName("button");
    const playerText = document.getElementById('playerText');
    const computerText = document.getElementById('computerText');
    const resultText = document.getElementById("resultText");
    const pScoreText = document.getElementById('pScore');
    const cScoreText = document.getElementById('cScore');
    const restartBtn = document.getElementById('restartGame');
  
    let pScore = 0;
    let cScore = 0;
    let playerClick;
    let computerClick;
  
    for (let button of buttons) {
        button.addEventListener("click", handleButtonClick );
    }
  
    function handleButtonClick(params){
      if (this.getAttribute("data-type") === "restartGame") {
        console.log("Restart Game!", params);
        restartGame()
      } else {
         playerClick = this.getAttribute("data-type");
        
  
        runGame(playerClick);
        
      }  
    }
  
    function runGame(playerClick){
     playerText.innerText = "Player: " + playerClick.toUpperCase(); 
     computerClick =  computerChoice()
     computerText.innerText = "Computer: " + computerClick.toUpperCase(); 
     resultText.innerText = checkResult();
     pScoreText.innerText = pScore;
     cScoreText.innerText = cScore;
      isGameOver()
      console.log(pScore);
      console.log(cScore);
      
      console.log('playerClick', playerClick);
      console.log('computerClick', computerClick);
      }
  
      // computer randomize 
    function computerChoice() {
        const choices = ["rock", "paper", "scissors"];
        const randomIndex = Math.floor(Math.random() * choices.length);
        return choices[randomIndex];
    }
  
  
      
    function checkResult(){
      // Compare user and computer choices
    if (playerClick === computerClick) {
      console.log("It's a tie!");
      return "It's a tie!";
    } else if (
      (playerClick === "rock" && computerClick === "scissors") ||
      (playerClick === "paper" && computerClick === "rock") ||
      (playerClick === "scissors" && computerClick === "paper")
    ) {
      console.log("You win!");
      ++pScore
      return "You win!";
    } else {
      console.log("Computer wins!");
      ++cScore
      return "Computer wins!"
    }
  
    console.log(`User chose: ${playerClick}`);
    console.log(`Computer chose: ${computerClick}`);
    };
  
  
    // const restartGame = ()=> {} , this is a new version 
    function restartGame(){
      pScore = 0;
      cScore = 0;
      pScoreText.innerText = pScore;
      cScoreText.innerHTML = cScore;
      restartBtn.setAttribute('disabled', true);
  
    console.log()
    }
  
    function isGameOver() {
          if(pScore < 5 && cScore < 5){
            return
          } else {
            alert(`Game Over! ${pScore > cScore ? 'Player Wins' : 'Computer Wins'} `);
            restartBtn.removeAttribute('disabled');
          }
          
    }
  
  });