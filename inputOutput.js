var questions = [
  'What is your name?',
  'What is your hobby?',
  'What is your preferred programming language?'
];

var answers = [];

function ask(i) {
  process.stdout.write(`\n${questions[i]}\n`);
  process.stdout.write(`  > `);
}

//First asynchronous function. This function is called on process when the user types some data in the stdin and press enter
process.stdin.on('data', function(data){
  process.stdout.write('\n' + data.toString().trim() + '\n');
  answers.push(data.toString().trim());

  if(answers.length < questions.length) {
    ask(answers.length);
  } else {
    process.exit();
  }
});

// This function is called when there is an exit event on process
process.on('exit', function(){
  process.stdout.write("\n\n\n");
  process.stdout.write(`Go ${answers[1]} ${answers[0]} finish writing ${answers[2]}`);
  process.stdout.write("\n\n\n");
});
ask(0);


