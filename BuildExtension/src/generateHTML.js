export default (answers) => {
  let answerHtmlFirst = String.raw`					<div class="answer answer_for_unspecified_answer" style="">
						<div class="select_answer answer_type">
							<label for="answer-32171">
								<div class="answer_html">
									<span style="font-size: 12pt;">`
  let answerHtmlSecond = String.raw`</span>
								</div>
							</label>
						</div>
					</div>`;
  let answersHTML = '';
  let counter = 0;
  return new Promise((resolve, reject) => {
    answers.forEach(answer => {
      counter++;
      answersHTML += answerHtmlFirst + answer + answerHtmlSecond + '\n';
      if (counter == answers.length) {
        resolve(answersHTML);
      }
    });
  });
}
