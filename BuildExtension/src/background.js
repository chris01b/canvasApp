import chromep from 'chrome-promise';
import io from 'socket.io-client';

import jqueryString from './Strings/jquery';
import scrapeQuestionsString from './Strings/scrapeQuestions';
import { firstHTML, secondHTML } from './Strings/html';
import injectAnswerString from './Strings/injectAnswer';

import generateHTML from './generateHTML';

const socket = io.connect('http://localhost:3000');
let tab;

async function waitForQuestions() {
  try {
    let [message, sender, sendResponse] = await chromep.runtime.onMessage.addListener();
    if (message.action == 'questions') {
      sendResponse('Background received questions');
      let questions = message.src;

      socket.emit('submitQuestions', questions);
      console.log('Questions:', questions);
      console.log('Submitted Questions to', socket.id);

    } else {
      sendResponse('Background didn\'t receive questions');
    }
  } catch (e) {console.error(e)}
  waitForClick();
}


async function waitForClick() { 
  try {
    tab = await chromep.browserAction.onClicked.addListener();
    console.log('browserAction clicked on', tab.id);

    chrome.tabs.executeScript(tab.id, {code: jqueryString()});
    chrome.tabs.executeScript(tab.id, {code: scrapeQuestionsString()});
  } catch (e) {console.error(e)}
  waitForQuestions();
}

socket.once('connect', () => {
  console.log('Connected to', socket.id);

  waitForClick();

  socket.on('returnAnswer', async (answer) => {
    console.log('Received Answer from', socket.id);
    console.log(answer);
    generateHTML(answer[1]).then(answerHTMLThing => {
      let answerHTML = firstHTML(answer[0]) + '\n' + answerHTMLThing + '\n' + secondHTML();
      chrome.tabs.executeScript(tab.id, {code: injectAnswerString(answer[0], answerHTML)});
    });
  });

  socket.on('disconnect', () => {
    console.log('Disconnected from', socket.id);
  });
});


