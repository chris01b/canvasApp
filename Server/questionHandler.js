const io = require('./io.js');

const cse = require('./libs/cse');
const Quizlet = require('./libs/quizlet');
const print = require('./libs/print');

function forEachAsync (array, callback) {
  for (let index = 0; index < array.length; index++) {
    callback(array[index], index, array);
  }
};

module.exports = () => {
  io.on('connection', socket => {
  console.log('Connected to', socket.id)

    async function findAnswers(questions) {
      let answers = [];
      forEachAsync(questions, async (question, index) => {
        let myCse = new cse("AIzaSyB_YyRZ3ePQNEephDs20BwuH_N-k1C_GH4", "000633526768340694300:gdwf-ty5mtk");
        let myQuizlet = new Quizlet("R3snf5zu9W");

        try {
          sets = await myCse.makeQuery(question);
          answer = await myQuizlet.search(sets, question);
          answers.push(answer);

          socket.emit('returnAnswer', [index+1, answer]);
        } catch(e) {
          if (e.message == 'Cannot read property \'toString\' of undefined') {
            console.error('No quizlets found for question', (index+1));
          }
        }
        console.log('Submitted Answer', (index+1), 'to', socket.id);
      });
    }

    socket.on('submitQuestions', questions => {
      console.log('Received Questions from', socket.id);
      findAnswers(questions).catch(console.error);
    });

    socket.on('disconnect', () => {
      console.log('Disconnected from', socket.id);
    });

  });
};
