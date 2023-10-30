const buttons = document.querySelectorAll("button");
const resultEl = document.getElementById("result");
const playerScoreEl = document.getElementById("user-score");
const computerScoreEl = document.getElementById("computer-score");

// initializing the variable score for user and computer
let playerScore = 0;
let computerScore = 0;

// adding functionalities for each button which is user-choice. then based on it computer will make it's choice. 
buttons.forEach(button => {
    button.addEventListener("click", () =>{
        const result = playRound(button.id, computerPlay());
        resultEl.textContent = result;
    });
});

// this functionality let computer to choose from the choices and then is counted the random choice which is returned at the end.  
function computerPlay(){
    const choices = ["rock", "paper", "scissors"];
    const randomChoice = Math.floor(Math.random() * choices.length);
    return choices[randomChoice];
}

//this functionality is for getting the score. according to user-choice and computer-choice.
function playRound(playerSelection, computerSelection){
    if(playerSelection === computerSelection){
        return "It's a tie";
    }else if((playerSelection ==="rock" && computerSelection === "scissors")||
    (playerSelection ==="paper" && computerSelection === "rock")||
    (playerSelection ==="scissors" && computerSelection === "paper")
    ){
        playerScore++;
        playerScoreEl.textContent = playerScore;
        return " you win! " + playerSelection +" beats " + computerSelection;
    }else {
        computerScoreEl.textContent = computerScore;
        computerScore++;
        return " you lose! " + computerSelection +" beats " + playerSelection;
    }
}