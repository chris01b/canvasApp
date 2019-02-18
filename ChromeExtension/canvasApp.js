var socket = io.connect('http://localhost');
// if send button clicked /w jquery
let questions = '';
socket.emit('submitQuestions', questions);

socket.on('returnAnswer', function(answer) {
  // Append to the bottom of the answer /w jquery
});
