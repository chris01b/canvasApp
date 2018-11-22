// Initiate all the stuff here

const path = require("path");
const cse = require('./cse');
const Quizlet = require('./quizlet');

forEachAsync = async function(array, callback) {
  // for some reason there is an undefined before 'array' which throws an error
  try {
    for (let index = 0; index < array.length; index++) {
      callback(array[index], index, array);
    }
  } catch {}
};

async function findAnswers() {
  let answers = [];
  await forEachAsync(questions, async (question, index) => {
    let myCse = new cse("AIzaSyB_YyRZ3ePQNEephDs20BwuH_N-k1C_GH4", "000633526768340694300:gdwf-ty5mtk");
    let myQuizlet = new Quizlet("R3snf5zu9W");
    sets = await myCse.makeQuery(question);
    answer = await myQuizlet.search(sets, question);
    answers.push(answer);
    // Output the answers and their number
    console.log(index+1);
    console.log(answer);
  });
}

findAnswers().catch(console.error);

if (module === require.main) {
  const fs = require('fs');
  var questions = fs.readFileSync(path.resolve(__dirname, '../questions.txt')).toString().split("\n");
  questions.pop(questions.length-1);
  findAnswers().catch(console.error);
}
