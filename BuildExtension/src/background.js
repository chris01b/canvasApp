import io from 'socket.io-client';

const socket = io.connect('http://localhost:3000');

socket.once('connect', () => {
  console.log('Connected to', socket.id);

  chrome.browserAction.onClicked.addListener(tab => {
    console.log('browserAction clicked on', tab.id);

    chrome.tabs.executeScript(tab.id, {
      code: `var questions = $(".question_text > span");
        console.log(w);
        chrome.runtime.sendMessage({action: 'questions', src: questions}, function(response) {
          console.log(response);
        });
        console.log('Sent source');`
    });

    chrome.runtime.onMessage.addListener((message, sender, sendResponse) => {
      if (message.action == 'window') {
        sendResponse('Received question');
        let questions = message.src;
        socket.emit('submitQuestions', questions);
        console.log('Questions:', questions);
        console.log('Submitted Questions to', socket.id);
      } else {
        sendResponse('Didn\'t receive window');
      }
    });

    /*
    chrome.tabs.get(tab.id, tab => {
      chrome.windows.get(tab.windowId, win => { 
        win.$ = $;
        let questions = $(".question_text > span");
        socket.emit(questions);
        console.log('Questions:', questions);
        console.log('Submitted Questions to', socket.id);
      });
    });
    */
  });
    
  socket.on('returnAnswer', answer => {
    console.log('Received Answer from', socket.id);
    console.log(answer);
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from', socket.id);
  });

});


