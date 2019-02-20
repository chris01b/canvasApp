import io from 'socket.io-client';
const socket = io.connect('http://localhost:3000');

socket.on('connect', async () => {

  /*
  // if button clicked w/ jquery on content.js
  chrome.runtime.onMessage.addListener(
    (message, sender, sendResponse) => {
      // If it's the right request
      socket.emit('submitQuestions', //IDK)
    }

  socket.on('returnAnswer', function(answer) {
  // Append to the bottom of the answer /w jquery
  });
  */

  chrome.browserAction.onClicked.addListener(tab => {
    console.log(tab.id);
    socket.emit('submitQuestions', 'The amount of light entering the eye is regulated by the\nObjects are brought into focus on the retina by changes in the curvature and thickness of the\nHair cells line the surface of the');
  });

  socket.on('returnAnswer', answer => {
    console.log(answer);
  });

});
