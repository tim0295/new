
function getComputerChoice(){
    const No = Math.random();
    while (No == 0 || No == 1/3 || No == 2/3 || No == 1)
        {
        const No = Math.random()
        };
    if (No < 1/3) 
    {
        return 'rock'
    }
    if (No > 2/3) 
    {
        return 'scissors'
    }
    else
    {
        return 'paper'
    }
}



function getHumanChoice(){
    choice = prompt('Please choose Rock, Paper or Scissors').toLowerCase()
    while (choice != 'rock' && choice != 'paper'  && choice != 'scissors')
        {
        choice = prompt('You have entered an incorrect option, please choose Rock, Paper or Scissors').toLowerCase()
        }
    return choice
}


function playgame(Rounds){
    humanScore = 0;
    computerScore = 0;
    for (let i=0; i <= Rounds; i++){
        playRound()
    }
}


function playRound(humanChoice, computerChoice) {
    const humanSelection = getHumanChoice();
    const computerSelection = getComputerChoice();
    if (humanSelection != computerSelection){
        if (humanSelection == 'rock'){
            if (computerSelection == 'scissors'){
                console.log('You win this round.')
                humanScore++
            }
            if (computerSelection == 'paper'){
                console.log('Computer wins this round.')
                computerScore++
            }
        }
        if (humanSelection == 'paper'){
            if (computerSelection == 'rock'){
                console.log('You win this round.')
                humanScore++
            }
            if (computerSelection == 'scissors'){
                console.log('Computer wins this round.')
                computerScore++
            }
        }
        if (humanSelection == 'scissors'){
            if (computerSelection == 'paper'){
                console.log('You win this round.')
                humanScore++
            }
            if (computerSelection == 'rock'){
                console.log('Computer wins this round.')
                computerScore++
            }
        }
    }
    else{
        console.log('This round is a tie.')
    }
    console.log(humanScore, computerScore, computerSelection)
    return humanScore, computerScore, computerSelection
  }
  





console.log(playgame(5))