
const readline = require('readline');

const reader = readline.createInterface({ //check in with reader const
  input: process.stdin,
  output: process.stdout
});


function askIfGreaterThan(el1, el2, callback) {
  reader.question(`Is ${el1} > ${el2}?\n`, function(res) {
    
    if (res === 'yes') {
      callback(true);
    } if (res === 'no') {
      callback(false);
    }
  });
}

function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  if (i < arr.length - 1)  {
    askIfGreaterThan(arr[i], arr[i+1], function(isGreaterThan) {
      if (isGreaterThan === true) {
        [arr[i], arr[i + 1]] = [arr[i + 1], arr[i]];
        console.log(arr);
        innerBubbleSortLoop(arr, i+1, true, outerBubbleSortLoop);
      } else {
        innerBubbleSortLoop(arr, i + 1, madeAnySwaps, outerBubbleSortLoop); //remever madeAnySwaps is our flag - dont prematurely set it to false.
      }
    });
  } else if (i == (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
  } 
}


function absurdBubbleSort(arr, sortCompletionCallback) {

  function outerBubbleSortLoop(madeAnySwaps) {

    if (madeAnySwaps === true) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
     sortCompletionCallback(arr); 
    }
  }
  outerBubbleSortLoop(true);
}


absurdBubbleSort([3,2,6,4,2], (arr) => {
  console.log(arr);
  reader.close();
});