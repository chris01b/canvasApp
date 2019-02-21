# canvasApp
Automatically search for answers from Quizlet on Canvas

## How to get the answers from the console
1. Type:
    `$(".question_text").find("span").map(function(i, el) {return $(el).text()}).get().join('\r\n');`
    into your canvas assignment's developer console.
2. Copy and paste the questions into `PASTE_QUESTIONS.txt`.
3. Run: `node getAnswers.js` from `Server/sample/`.

OR try it on [Repl](https://repl.it/@chris01b/canvasApp)

## How to start the server
Run:
    `node index.html` from `Server/`.

## How to build and load the Chrome Extension
1. Run:
    `npm run-script build` from `BuildExtension/`.
2. Navigate to `chrome://extensions/` in Chrome.
3. Turn on "Developer mode" via the top-right toggle.
4. Click "Load unpacked" and select the `ChromeExtension` folder that was generated in in `CanvasApp/`

## Abuse
Please don't abuse API keys. Use the honor code.
