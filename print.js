// Needed only for console output
// Take the async input and print it in order

let answers = [];
let lastPrinted = 0;
let nextAnswer;

function print(answer) {
  answers.push(answer);

  getNextAnswer();

  while (typeof nextAnswer !== 'undefined') {
    lastPrinted = nextAnswer[0];

    console.log(nextAnswer[0]);
    console.log(nextAnswer[1]);
    console.log();

    getNextAnswer();
  }
}

function getNextAnswer() {
  nextAnswer = answers.find(answer => answer[0] === lastPrinted + 1);
}

module.exports = print;
