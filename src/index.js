// Initiate all the stuff here

const cse = require('./cse');
const Quizlet = require('./quizlet');

const myCse = new cse("AIzaSyB_YyRZ3ePQNEephDs20BwuH_N-k1C_GH4", "000633526768340694300:gdwf-ty5mtk");
const myQuizlet = new Quizlet("R3snf5zu9W");

// retrieve a list of stuff from google custom search

async function findAnswers() {
  sets = await myCse.makeQuery(query);
  response = await myQuizlet.search(sets, query);
  console.log(response);
}

if (module === require.main) {
  var query = process.argv[2];
  findAnswers().catch(console.error);
}
