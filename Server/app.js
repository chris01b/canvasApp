const app = require('http').createServer(handler)
const io = require('socket.io')(app);
const fs = require('fs');

const cse = require('./libs/cse');
const Quizlet = require('./libs/quizlet');
const print = require('./libs/print');


app.listen(80);

function handler (req, res) {
  fs.readFile(__dirname + '/index.html',
  (err, data) => {
    if (err) {
      res.writeHead(500);
      return res.end('Error loading index.html');
    }

    res.writeHead(200);
    res.end(data);
  });
}

forEachAsync = async function(array, callback) {
  // for some reason there is an undefined before 'array' which throws an error
  try {
    for (let index = 0; index < array.length-1; index++) {
      callback(array[index], index, array);
    }
  } catch(e) {}
};

io.on('connection', socket => {

  async function findAnswers(questions) {
    let answers = [];
    await forEachAsync(questions, async (question, index) => {
      let myCse = new cse("AIzaSyB_YyRZ3ePQNEephDs20BwuH_N-k1C_GH4", "000633526768340694300:gdwf-ty5mtk");
      let myQuizlet = new Quizlet("R3snf5zu9W");

      sets = await myCse.makeQuery(question).catch(console.error);
      answer = await myQuizlet.search(sets, question);
      answers.push(answer);

      socket.emit('returnAnswer', [index+1, answer]);
    });
  }

  socket.on('submitQuestions', data => {
    findAnswers(questions.toString().split('\n')).catch(console.error); // Is ".toString()" necessary?
  });

});
