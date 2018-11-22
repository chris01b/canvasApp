# canvasApp
Automatically search for answers from Quizlet on Canvas

## How to use
1. Type:
    `$(".question_text").find("span").map(function(i, el) {return $(el).text()}).get().join('\r\n');`
    into your canvas assignment's developer console.
2. Copy and paste the questions into `questions.txt`.
3. Run: `node src/index.js` from the root of the folder.
