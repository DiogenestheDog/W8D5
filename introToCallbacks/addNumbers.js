const readline = require('readline');

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});


function addNumbers(sum, numsLeft, completionCallback) {
  if (numsLeft > 0) {
    reader.question("Please give us a number \n", function(res) {
      response = parseInt(res);
      console.log("-----------");
      sum += response;
      console.log(`Sum is now ${sum} ----`);
      addNumbers(sum, numsLeft - 1, completionCallback);
    });
  } else {
    completionCallback(sum);
    process.exit();
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
