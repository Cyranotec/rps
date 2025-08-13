//Variables globales
let user = 0;
let computer = 0;
let ties = 0;
let partidas = 0;
//Elementos DOM
const userElement = document.querySelector('#user');
const tiesElement = document.querySelector('#ties');
const computerElement = document.querySelector('#computer');
const lastChoice = document.querySelector('#lastChoice');
//Constantes
const OPCIONES = ['rock', 'paper', 'scissors'];
const RULES = {
    rock: { beats: 'scissors' },
    paper: { beats: 'rock' },
    scissors: { beats: 'paper' }
}

//Genera una elección aleatoria entre piedra papel y tijeras
function generateChoice() {
    return OPCIONES[Math.floor(Math.random() * 3)];
}
//Maneja los eventos de los botones dentro de la sección de usuario, cuando elige se genera una elección aleatoria de la computadora, se muestra en el botón de la computadora y se actualiza el score

function handleSelection(e) {

    if (e.target.tagName == 'BUTTON') {
        const userChoice = e.target.id;
        const computerChoice = generateChoice();

        let winner;
        if (userChoice !== computerChoice) {
            //
            winner = (RULES[userChoice].beats == computerChoice) ? 'user' : 'computer';
        }
        else {
            winner = 'tie';
        }
        switch (winner) {
            case 'user':
                user += 1;
                break;
            case 'computer':
                computer += 1;
                break;
            default:
                ties += 1;
        }
        partidas += 1;
        //Actualiza DOM
        lastChoice.textContent = `User: ${userChoice} vs Machine: ${computerChoice}`;

        if ((user + computer) == 5) {
            lastChoice.textContent = `Game over`;
            alert(`Human: ${user} vs Computer: ${computer}. El ganador es ${user > computer ? 'User' : 'Computer'}`);
            partidas = 0;
            user = 0;
            computer = 0;
            ties = 0;
        }
        userElement.textContent = user;
        tiesElement.textContent = ties;
        computerElement.textContent = computer;
    }
}

const botones = document.querySelector("#choice");
botones.addEventListener('click', handleSelection);






// let userWins = 0;
// let computerWins = 0;
// let ties = 0;

// // generate randomly a value (rock,paper, scissors) as the computerChoice
// function computerChoice() {
//     // como hago para que un número multiplicado por n<1 de como resultado 1, 2 o 3
//     const aleatorio = Math.random();
//     if (aleatorio > .33)
//         if (aleatorio < .66)
//             return ("paper");
//         else
//             return ("scissors");
//     else
//         return ("rock");

// };

// // ask user to input its choice and return it
// function userChoice() {
//     return (prompt("escribe rock,paper or scissors").toLowerCase());

// }
// // take both, computer and user choice and compare them to set a winner and increase its wining counter
// function playRound(user, computer) {

//     let winner = '';
//     switch (user) {
//         case 'rock': switch (computer) {
//             case 'rock': winner = 'tie';
//                 break;
//             case 'paper': winner = 'computer';
//                 break;
//             case 'scissors': winner = 'user';
//                 break;
//         }break;
//         case 'paper': switch (computer) {
//             case 'rock': winner = 'user';
//                 break;
//             case 'paper': winner = 'tie';
//                 break;
//             case 'scissors': winner = 'computer';
//                 break;
//         }break;
//         case 'scissors': switch (computer) {
//             case 'rock': winner = 'computer';
//                 break;
//             case 'paper': winner = 'user';
//                 break;
//             case 'scissors': winner = 'tie';

//         }

//     }

//     switch (winner) {
//         case 'user': userWins += 1; break;
//         case 'computer': computerWins += 1; break;
//         case 'tie': ties += 1;
//     }

//     return (`${user} vs ${computer}. ${winner}+1 User ${userWins} : Computer ${computerWins} : Ties ${ties}`);


// }
// function playGame(times) {
//     // create two variables of type int and 0 initial value for counting user and computer wins

//     for (let index = 0; index < times; index++) {
//         console.log(playRound(userChoice(), computerChoice()));
//     }
//     console.log(`User:${userWins} vs Computer:${computerWins}. The winner is:${(userWins > computerWins) ? 'User' : 'Computer'}`)
// }



