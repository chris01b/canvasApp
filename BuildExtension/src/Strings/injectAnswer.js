export default (number, answerHTML) => {
  return `

var answerHTML = ` + '`' + answerHTML + '`' + `;

$('span:contains("Question ` + number + String.raw`")[role="heading"]')
  .filter(function() {
    return $(this).text() === ("Question ` + number + String.raw`");
  }).parents().eq(2).after(answerHTML);

console.log('Injected answer ` + number + `');

`}
