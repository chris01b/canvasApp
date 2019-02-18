// Initiate all the stuff here

const cse = require('../libs/cse');
const Quizlet = require('../libs/quizlet');
const print = require('../libs/print');

let isModule = true;

forEachAsync = async function(array, callback) {
  // for some reason there is an undefined before 'array' which throws an error
  try {
    for (let index = 0; index < array.length-1; index++) {
      callback(array[index], index, array);
    }
  } catch(e) {}
};

async function findAnswers(questions, callback) {
  let answers = [];
  await forEachAsync(questions, async (question, index) => {
    let myCse = new cse("AIzaSyB_YyRZ3ePQNEephDs20BwuH_N-k1C_GH4", "000633526768340694300:gdwf-ty5mtk");
    let myQuizlet = new Quizlet("R3snf5zu9W");

    sets = await myCse.makeQuery(question).catch(console.error);
    answer = await myQuizlet.search(sets, question);
    answers.push(answer);
    
    if (isModule == false) {
      print([index+1, answer]);
    } else {
      // TODO
    }
  });
}

findAnswers().catch(console.error);

module.exports = findAnswers;

if (module === require.main) {
  const fs = require('fs');
  const path = require('path');
  const file = path.resolve(__dirname, 'PASTE_QUESTIONS.txt');

  isModule = false;

  fs.readFile(file, (err, questions) => {
    if (err) throw err;
    findAnswers(questions.toString().split("\n")).catch(console.error);
  });
}
