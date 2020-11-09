const userScore = 0;
const computrScore = 0;

const userScore_span = document.getElementById('userScore')!;
const computerScore_span = document.getElementById('computerScore')!;
const scoreBoard_div = document.getElementById('scoreBoard')!;
const result_div = document.getElementById('result')!;
const rock_div = document.getElementById('rock')!;
const paper_div = document.getElementById('paper')!;
const scissors_div = document.getElementById('scissors')!;

function getComputerChoice(): string {
  const choices: string[] = ['r', 'p', 's'];
  return choices[Math.floor(Math.random() * 3)]
}

function game(userChoice: string) {
  const computerChoice: string = getComputerChoice();
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