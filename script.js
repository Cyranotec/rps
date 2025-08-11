let userWins = 0;
let computerWins = 0;
let ties = 0;

// generate randomly a value (rock,paper, scissors) as the computerChoice
function computerChoice() {
    // como hago para que un número multiplicado por n<1 de como resultado 1, 2 o 3
    const aleatorio = Math.random();
    if (aleatorio > .33)
        if (aleatorio < .66)
            return ("paper");
        else
            return ("scissors");
    else
        return ("rock");

};

// ask user to input its choice and return it
function userChoice() {
    return (prompt("escribe rock,paper or scissors").toLowerCase());

}
// take both, computer and user choice and compare them to set a winner and increase its wining counter
function playRound(user, computer) {

    let winner = '';
    switch (user) {
        case 'rock': switch (computer) {
            case 'rock': winner = 'tie';
                break;
            case 'paper': winner = 'computer';
                break;
            case 'scissors': winner = 'user';
                break;
        }break;
        case 'paper': switch (computer) {
            case 'rock': winner = 'user';
                break;
            case 'paper': winner = 'tie';
                break;
            case 'scissors': winner = 'computer';
                break;
        }break;
        case 'scissors': switch (computer) {
            case 'rock': winner = 'computer';
                break;
            case 'paper': winner = 'user';
                break;
            case 'scissors': winner = 'tie';

        }

    }

    switch (winner) {
        case 'user': userWins += 1; break;
        case 'computer': computerWins += 1; break;
        case 'tie': ties += 1;
    }

    return (`${user} vs ${computer}. ${winner}+1 User ${userWins} : Computer ${computerWins} : Ties ${ties}`);


}
function playGame(times) {
    // create two variables of type int and 0 initial value for counting user and computer wins

    for (let index = 0; index < times; index++) {
        console.log(playRound(userChoice(), computerChoice()));
    }
    console.log(`User:${userWins} vs Computer:${computerWins}. The winner is:${(userWins > computerWins) ? 'User' : 'Computer'}`)
}



playGame(3);