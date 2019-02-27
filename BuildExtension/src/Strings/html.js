export function firstHTML(number) {
  return String.raw`<div role="region" aria-label="Question" class="quiz_sortable question_holder " id="" style="" data-group-id="">
	<div style="display: block; height: 1px; overflow: hidden;">&nbsp;</div>
	<div class="display_question question multiple_choice_question" id="question_60950872">
		<div class="header">
			<span class="name question_name" role="heading" aria-level="2">Answer ` + number + String.raw`</span>
		</div>
		<div style="display: none;">
			<span class="regrade_option"></span>
			<span class="regrade_disabled">0</span>
			<span class="question_type">multiple_choice_question</span>
			<span class="answer_selection_type"></span>
		</div>
		<div class="text">
			<div class="answers">
				<div class="answers_wrapper">
				    <div class="clear"></div>`;
}

export function secondHTML() {
  return String.raw`					<div class="clear"></div>
				</div>
			</div>
			<div class="after_answers"></div>
		</div>
		<div class="clear"></div>
	</div>
</div>`;
}
