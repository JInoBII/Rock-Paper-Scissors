function getComputerChoice(choice){
    return choice[Math.floor(Math.random()*choice.length)];
}
let choice =["rock","paper","scissors"];


    function playRound()
    {
        let playerSelection = prompt("what is your weapon?")
        let computerSelection = getComputerChoice(choice);

        if (playerSelection==="rock" && computerSelection==="scissors"){
            console.log("you win, rock beats scissors");
            ++playerScore;
        }
        if (playerSelection==="paper" && computerSelection==="rock"){
            console.log("you win, paper beats rock");
            ++playerScore;
        }
        if (playerSelection==="scissors" && computerSelection==="paper"){
            console.log("you win, scissors scissors beats rock");
            ++playerScore;
        }
        if (computerSelection==="rock" && playerSelection==="scissors"){
            console.log("you lose, rock rock beats scissors");
            ++computerScore;
        }
        if (computerSelection==="paper" && playerSelection==="rock"){
            console.log("you lose, paper beats rock");
            ++computerScore;
        }
        if(computerSelection==="scissors" && playerSelection==="paper"){
            console.log("you lose, scissors beats paper");
            ++computerScore
        }
        if(computerSelection===playerSelection){
            console.log("tie")
        }
        console.log(playerScore,computerScore)
        
    }  
    let playerScore = 0
    let computerScore = 0
    function playGame(){
        playRound();
        if (computerScore>3){
            alert("You Lost!")
            return;
        }
        if (playerScore>3){
            alert("You Win!")
            return;
        }
        playRound();
        if (computerScore>3){
            alert("You Lost!")
            return;
        }
        if (playerScore>3){
            alert("You Win!")
            return;
        }
        playRound();
        if (computerScore>3){
            alert("You Lost!")
            return;
        }
        if (playerScore>3){
            alert("You Win!")
            return;
        }
        playRound();
        if (computerScore>3){
            alert("You Lost!")
            return;
        }
        if (playerScore>3){
            alert("You Win!")
            return;
        }
        playRound();
        if (computerScore>3){
            alert("You Lost!")
            return;
        }
        if (playerScore>3){
            alert("You Win!")
            return;
        }
    }          
    playGame()