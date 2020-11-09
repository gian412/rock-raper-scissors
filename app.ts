let userScore = 0;
let computerScore = 0;

const userScore_span = document.getElementById('userScore')!;
const computerScore_span = document.getElementById('computerScore')!;
const scoreBoard_div = document.querySelector('.scoreBoard')!;
const result_p = document.getElementById('result')!;
const rock_div = document.getElementById('rock')!;
const paper_div = document.getElementById('paper')!;
const scissors_div = document.getElementById('scissors')!;

function getComputerChoice(): string {
  const choices: string[] = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)]
}

function convertToWord(letter: string): string {
  if (letter === 'r') return 'Rock';
  if (letter === 'p') return 'Paper';
  return 'Scissors';
}

function win(userChoice: string, computerChoice: string) {
  userScore++;
  userScore_span.innerHTML = userScore.toString();
  computerScore_span.innerHTML = computerScore.toString();
  result_p.innerHTML = `${convertToWord(userChoice)}<sub><span class="small">user</span></sub> beats ${convertToWord(computerChoice)}<sub><span class="small">comp</span></sub>. You win! 🔥` 
}

function lose(userChoice: string, computerChoice: string) {
  computerScore++;
  userScore_span.innerHTML = userScore.toString();
  computerScore_span.innerHTML = computerScore.toString();
  result_p.innerHTML = `${convertToWord(userChoice)}<sub><span class="small">user</span></sub> loses to ${convertToWord(computerChoice)}<sub><span class="small">comp</span></sub>. You lost... 💩`
}

function draw(userChoice: string, computerChoice: string) {
  result_p.innerHTML = `${convertToWord(userChoice)}<sub><span class="small">user</span></sub> equals ${convertToWord(computerChoice)}<sub><span class="small">comp</span></sub>. It's a draw.` 
}

function game(userChoice: string) {
  const computerChoice: string = getComputerChoice();
  switch (userChoice + computerChoice) {
    case 'rs':
    case 'sp':
    case 'pr':
      win(userChoice, computerChoice);
      break;
    case 'rp':
    case 'ps':
    case 'sr':
      lose(userChoice, computerChoice);
      break;
    case 'rr':
    case 'pp':
    case 'ss':
      draw(userChoice, computerChoice);
      break;
    default:
      console.log('Error');
      break;
      
  }
}
function main() {

  rock_div.addEventListener('click', () => {
    game('r');
  })

  paper_div.addEventListener('click', () => {
    game('p');
  })

  scissors_div.addEventListener('click', () => {
    game('s');
  })

}

main();