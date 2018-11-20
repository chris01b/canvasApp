// Initiate all the stuff here

const cse = require('./cse');
const Quizlet = require('./quizlet');
require('array-foreach-async');

const myCse = new cse("AIzaSyB_YyRZ3ePQNEephDs20BwuH_N-k1C_GH4", "000633526768340694300:gdwf-ty5mtk");
const myQuizlet = new Quizlet("R3snf5zu9W");

async function findAnswers() {
  let answers = [];
  await questions.forEachAsync(async (question) => {
    sets = await myCse.makeQuery(question);
    answer = await myQuizlet.search(sets, question);
    answers.push(answer);
    console.log(answer);
  });
}

findAnswers().catch(console.error);

if (module === require.main) {
  const fs = require('fs');
  var questions = fs.readFileSync('../questions.txt').toString().split("\n");
  findAnswers().catch(console.error);
}
