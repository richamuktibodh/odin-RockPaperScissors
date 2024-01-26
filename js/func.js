function getComputerChoice()
{
    const choices = ['Rock','Paper','Scissors'];
    const n = choices.length;
    random_elt = choices[Math.floor(Math.random()*n)];
    console.log(random_elt);
    return random_elt;
}

function playRound(playerSelection, computerSelection) 
{
    playerSelection = playerSelection.toLowerCase();
    computerSelection = computerSelection.toLowerCase();
    if (playerSelection == computerSelection)
    {
        return playRound(playerSelection, getComputerChoice()); // a round can't end in a tie
    }
    if ((playerSelection == 'rock' && computerSelection == 'paper') || (playerSelection == 'scissors' && computerSelection == 'rock') || (playerSelection == 'paper' && computerSelection == 'scissors'))
    {
        return `U LOST the round, ${computerSelection} beats ${playerSelection}`;
    }
    if ((playerSelection == 'rock' && computerSelection == 'scissors') || (playerSelection == 'scissors' && computerSelection == 'paper') || (playerSelection == 'paper' && computerSelection == 'rock'))
    {
        return `U WON the round, ${playerSelection} beats ${computerSelection}`;
    }
}

function game()
{
    let player_score = 0, computer_score = 0;
    for (let i = 0; i< 2; i++)
    {
        // take playerSelection and computerSelection input
        let playerSelection = prompt('Enter either rock, paper or scissors', 'rock');
        let computerSelection = getComputerChoice();
        let result = playRound(playerSelection, computerSelection);
        if (result[2] == 'L')
        {
            computer_score++;
        }
        else
        {
            player_score++;
        }
        console.log(result, player_score, computer_score);
    }
    if (player_score> computer_score)
    {
        console.log(`You've won the game`);
    }
    else if (player_score< computer_score)
    {
        console.log(`You've lost the game`);
    }
    else
    {
        console.log(`It's a tie`);
    }
}

game();
// getComputerChoice()