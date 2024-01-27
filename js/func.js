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
    return 'Choose wtv u want';
}
// reference to body
const bodyReference = document.querySelector('body');
// reference to div
const divReference = document.querySelector('div');
// make a new paragraph
let pReference = document.createElement('p');

// making 3 new buttons
const rockButton = document.createElement('button');
rockButton.textContent = 'Rock';
const paperButton = document.createElement('button');
paperButton.textContent = 'Paper';
const scissorsButton = document.createElement('button');
scissorsButton.textContent = 'Scissors';

function incrementScore(str)
{
    if (str.charAt(2) == 'L')
    {
        computer_score++;
    }
    else
    {
        player_score++;
    }
    console.log(str, player_score, computer_score);
}

let player_choice = '', computer_choice = '';
let player_score = 0, computer_score = 0;
rockButton.addEventListener('click', function clickedRock()
{
    if (player_score < 5 && computer_score < 5)
    {
        player_choice = rockButton.textContent;
        computer_choice = getComputerChoice();
        pReference.textContent = playRound(player_choice, computer_choice);
        incrementScore(pReference.textContent);
        pReference.textContent+= ` player score: ${player_score} computer score: ${computer_score}`;
    }
    else
    {
        if (player_score> computer_score)
        {
            pReference.textContent = 'Congrats! u won the set of games!';
        }
        else
        {
            pReference.textContent = 'Hard Luck! the computer is smarter..';
        }
    }
    divReference.appendChild(pReference);
})

paperButton.addEventListener('click', function clickedPaper()
{
    if (player_score < 5 && computer_score < 5)
    {
        player_choice = paperButton.textContent;
        computer_choice = getComputerChoice();
        pReference.textContent = playRound(player_choice, computer_choice);
        incrementScore(pReference.textContent);
        pReference.textContent+= ` player score: ${player_score} computer score: ${computer_score}`;
    }
    else
    {
        if (player_score> computer_score)
        {
            pReference.textContent = 'Congrats! u won the set of games!';
        }
        else
        {
            pReference.textContent = 'Hard Luck! the computer is smarter..';
        }
    }
    divReference.appendChild(pReference);
})

scissorsButton.addEventListener('click', function clickedScissors()
{
    if (player_score < 5 && computer_score < 5)
    {
        player_choice = scissorsButton.textContent;
        computer_choice = getComputerChoice();
        pReference.textContent = playRound(player_choice, computer_choice);
        incrementScore(pReference.textContent);
        pReference.textContent+= ` player score: ${player_score} computer score: ${computer_score}`;
    }
    else
    {
        if (player_score> computer_score)
        {
            pReference.textContent = 'Congrats! u won the set of games!';
        }
        else
        {
            pReference.textContent = 'Hard Luck! the computer is smarter..';
        }
    }
    divReference.appendChild(pReference);
})

bodyReference.appendChild(rockButton);
bodyReference.appendChild(paperButton);
bodyReference.appendChild(scissorsButton);

// game();
// getComputerChoice()