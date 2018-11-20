// Initiate all the stuff here

const cse = require('./cse');
const Quizlet = require('./quizlet');
require('array-foreach-async');

const myCse = new cse("AIzaSyB_YyRZ3ePQNEephDs20BwuH_N-k1C_GH4", "000633526768340694300:gdwf-ty5mtk");
const myQuizlet = new Quizlet("R3snf5zu9W");

async function findAnswers() {
  let questions = ["Researchers are interested in studying the impact of drugs on human fetuses. In this case, why would a correlational study be more appropriate than an experiment?",
  "Researchers use experiments rather than other research methods in order to distinguish between",
  "Which of the following types of cells are located in the brain's occipital lobe?"];
  
  let answers = [];
  await questions.forEachAsync(async (question) => {
    sets = await myCse.makeQuery(question);
    answer = await myQuizlet.search(sets, question);
    answers.push(answer);
    console.log(answer);
  });
}

findAnswers().catch(console.error);

/*
if (module === require.main) {
  var query = process.argv[2];
  findAnswers().catch(console.error);
}
*/
