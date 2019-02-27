export default () => {
return String.raw`

var questions = [];

$(".question_text > span").toArray().forEach(span => {
  questions.push(span.innerHTML);
});

var payload = {action: 'questions', src: questions};

chrome.runtime.sendMessage(payload, function(response) {
  console.log(response);
});

`}
