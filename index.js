// SCPC JS Task

// task------1
function reverseString(inputStr) {
  let reversedStr = '';
  for (let i = inputStr.length - 1; i >= 0; i--) {
    reversedStr += inputStr[i];
  }
  return reversedStr;
}

let inputStr = "hello world";
let outputString = reverseString(inputStr);
console.log(outputString); // Output: "dlrow olleh"


// task------2
function sumOfPositiveNumbers(arr) {
  let sum = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      sum += arr[i];
    }
  }
  return sum;
}

let inputNumber = [2, -5, 10, -3, 7];
let outputSum = sumOfPositiveNumbers(inputNumber);
console.log(outputSum); // Output: 19

// task-----3
function findMostFrequent(inputArray) {
  let elementCount = {};

  for (let num of inputArray) {
    if (elementCount[num]) {
      elementCount[num]++;
    } else {
      elementCount[num] = 1;
    }
  }

  let mostFrequentElement;
  let maxCount = 0;
  for (let num in elementCount) {
    if (elementCount[num] > maxCount) {
      maxCount = elementCount[num];
      mostFrequentElement = num;
    }
  }

  return mostFrequentElement;
}

// Test the function
let inputArray = [3, 5, 2, 5, 3, 3, 1, 4, 5];
let mostFrequent = findMostFrequent(inputArray);
console.log("The most frequent element is: " + mostFrequent); // Output: 3
