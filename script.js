


	document.querySelector('any valid css selector')
	let questions = [
		{
			id: 'question0',
			text: 'When was the Declaration of Independence adopted?',
				a: 'December 7, 1787',
				b: 'March 4, 1778',
				c: 'July 4, 1776',
				d: 'July 4, 1789',
			answer: 'c'
		},
		{
			id: 'question1',
			text: 'Under the Constitution, which of these powers does not belong to the federal government?',
				a: 'Ratify amendments to the Constitution',
				b: 'Print money',
				c: 'Declare war',
				d: 'Make treaties with foreign powers',
			answer: 'a',
		},
		{
			id: 'question2',
			text: 'What did the Emancipation Proclamation do?',
				a: 'freed slaves in most Southern states ',
				b: 'gave women the right to vote',
				c: 'gave the United States independence from Great Britain',
				d: 'ended World War I',
			answer: 'a',

		},
		{
			id: 'question3',
			text: 'Who is the current Chief Justice of the United States?',
				a: 'Brett M. Kavanaugh',
				b: 'John G. Roberts Jr.',
				c: 'Ruth Bader Ginsburg',
				d: 'William P. Barr',
			answer: 'b',
		},
		{
			id: 'question4',
			text: 'When was the Constitution written?',
				a: '1776',
				b: '1865',
				c: '1492',
				d: '1787',
			answer: 'd',
		},
		{
		  id: 'question5',
		  text: 'Name one of the two longest rivers in the United States.',
		    a: 'Mississippi River',
		    b: 'Ohio River',
		    c: 'Colorado River',
		    d: 'Deleware River',
		  answer: 'a',
		},

		{
		  id: 'question6',
		  text: 'What is one thing Benjamin Franklin is famous for?',
		    a: 'Mississippi River',
		    b: 'Youngest member of the Constitutional Convention',
		    c: 'U.S. diplomat',
		    d: 'third president of the United States',
		  answer: 'c',
		},

		{
		  id: 'question7',
		  text: 'What stops one branch of government from becoming too powerful?',
		    a: 'the President',
		    b: 'freedom of speech',
		    c: 'the people',
		    d: 'checks and balances ',
		  answer: 'd',
		},

		{
		  id: 'question8',
		  text: 'How many voting members does the House of Representatives have?',
		    a: '538',
		    b: '100',
		    c: '438',
		    d: '435',
		  answer: 'd',
		},

		{
		  id: 'question9',
		  text: 'The Federalist Papers supported the passage of the U.S. Constitution. Which of these men was not one of the authors?',
		    a: 'James Madison',
		    b: 'John Adams',
		    c: 'John Jay',
		    d: 'Alexander Hamilton',
		  answer: 'b',
		},

	]



questions.forEach(question => {
	// set the question text
	let selectorText = '#' + question.id + ' p.question'
	document.querySelector(selectorText).innerText=question.text

	// set the text of answer a
	let selectorA = '#' + question.id + ' span.a'
	document.querySelector(selectorA).innerText=question.a

	// set the text of answer b
	let selectorB = '#' + question.id + ' span.b'
	document.querySelector(selectorB).innerText=question.b


	// set the text of answer c
	let selectorC = '#' + question.id + ' span.c'
	document.querySelector(selectorC).innerText=question.c

	// set the text of answer d
	let selectorD = '#' + question.id + ' span.d'
	document.querySelector(selectorD).innerText=question.d


;


})

function check() {
	let correct = 0

	if (questions[0].answer == document.quiz.question0.value ) {
		correct = correct + 1
	}

  if (questions[1].answer == document.quiz.question1.value ) {
		correct = correct + 1
	}

	if (questions[2].answer == document.quiz.question2.value ) {
		correct = correct + 1
	}

	if (questions[3].answer == document.quiz.question3.value ) {
		correct = correct + 1
	}

	if (questions[4].answer == document.quiz.question4.value ) {
		correct = correct + 1
	}

	if (questions[5].answer == document.quiz.question5.value ) {
		correct = correct + 1
	}

	if (questions[6].answer == document.quiz.question6.value ) {
		correct = correct + 1
	}

	if (questions[7].answer == document.quiz.question7.value ) {
		correct = correct + 1
	}

	if (questions[8].answer == document.quiz.question8.value ) {
		correct = correct + 1
	}

	if (questions[9].answer == document.quiz.question9.value ) {
		correct = correct + 1
	}

	var pictures = ["https://media.giphy.com/media/USUr7DBRYcnT4mFc6I/giphy.gif", "https://media.giphy.com/media/3o6Mb8Qb2qtth1WU9i/giphy.gif",];
	var messages = ["Oh no! Don't worry, you have a second attempt!", "You passed!"];

	if (correct <= 5){
		document.getElementById("after_submit").style.visibility = "visible";
		document.getElementById("message").innerHTML = messages[0];
		document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 10 correct.";
		document.getElementById("picture").src = pictures[0];

	}

	else if (correct => 6){

		document.getElementById("after_submit").style.visibility = "visible";
		document.getElementById("message").innerHTML = messages[1];
		document.getElementById("number_correct").innerHTML = "You got " + correct + " out of 10 correct.";
		document.getElementById("picture").src = pictures[1];
	}

}
