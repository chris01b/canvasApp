# canvasApp
Automatically search for answers from Quizlet on Canvas

## How to use
1. Type:
    `$(".question_text").find("span").map(function(i, el) {return $(el).text()}).get().join('\r\n');`
    into your canvas assignment's developer console.
2. Copy and paste the questions into `PASTE_QUESTIONS.txt`.
3. Run: `node getAnswers.js` from `Server`.

OR try it on [Repl](https://repl.it/@chris01b/canvasApp)

## Abuse
Please don't abuse API keys. This is the honor code.
