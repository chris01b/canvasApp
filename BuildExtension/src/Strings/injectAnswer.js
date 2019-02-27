export default (number, answerHTML) => {
  return `

var answerHTML = ` + '`' + answerHTML + '`' + `;

var question = $('span:contains("Question ` + number + String.raw`")[role="heading"]')
  .filter(function() {
    return $(this).text() === ("Question ` + number + String.raw`");
  });

var incorrectQuestion = $('span:contains("Question ` + number + String.raw`")[role="heading"]');
var incorrectTest = incorrectQuestion.is('span[aria-describedby="user_answer_NaN_arrow"]');

if (question.length == 0 && incorrectTest == true) {
  console.log('INCORRECT');
  question = incorrectQuestion;
}

question.parents().eq(2).after(answerHTML);

console.log('Injected answer ` + number + `');

`}
