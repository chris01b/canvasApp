export default (message) => {
  console.log('Send chromeMessage:', message);
  return new Promise((resolve, reject) => {
    chrome.runtime.sendMessage(message, response => {
      if (response) {
        resolve(response);
      } else {
        reject('browserAction not open');
      }
    });
  });
}
