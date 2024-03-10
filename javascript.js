function getComputerChoice(choice){
    return choice[Math.floor(Math.random()*choice.length)];
}
let choice =["rock","paper","scissors"];
console.log(getComputerChoice(choice))

function playRound(playerSelection, computerSelection){
    if (playerSelection===computerSelection)
    return "tie";
        if (computerSelection==="paper")
        return "you lose"
            if (computerSelection==="scissors")
            return "you win"
}
        const playerSelection = "rock";
        const computerSelection = getComputerChoice(choice);
console.log(playRound(playerSelection,computerSelection))

function playGame(playRound)
