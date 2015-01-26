/* Make sure you do these last */

/*

Write a function that takes an array of integers and returns the sum of the integers after adding 1 to each.


*/
var plusOneSum = [1, 2, 3, 4]; // 14
var sumFn = function(arr) {
  var sum = 0;
  for(var i = 0; i < arr.length; i++) {
  	sum += arr[i] + 1;
  }
  return sum;
}

sumFn(plusOneSum);


/*

Write a function that accepts a multi dimensional array and returns a flattened version.


*/
var flatten = [1, 2, [3, [4], 5, 6], 7] // [1, 2, 3, 4, 5, 6, 7]
var flattenArray = function(arr) {
	var newArray = [];
	for(var i = 0; i < arr.length; i++) {
		if(!Array.isArray(arr[i])) {
			newArray.push(arr[i]);
		}
		else {
			var temp = flattenArray(arr[i]);
			for(var j = 0; j < temp.length; j++) {
				newArray.push(temp[j]);
			}
		}	
	}
	return newArray;
}

flattenArray(flatten);
/*

Given an array [a1, a2, ..., aN, b1, b2, ..., bN, c1, c2, ..., cN] convert it to [a1, b1, c1, a2, b2, c2, ..., aN, bN, cN]

*/
var abc = ["a1", "a2", "a3", "a4", "b1", "b2", "b3", "b4", "c1", "c2", "c3", "c4"];

var sortArray = function(arr) {
	var aArray = [];
	var bArray = [];
	var cArray = [];
	var newArray = [];
	for(var i = 0; i < arr.length; i++) {
		if(arr[i].charAt(0) === 'a') {
			aArray.push(arr[i]);
		}
		else if (arr[i].charAt(0) === 'b') {
			bArray.push(arr[i]);
		}
		else {
			cArray.push(arr[i]);
		}
	}
	for(var i = 0; i < aArray.length; i++) {
		newArray.push(aArray[i], bArray[i], cArray[i]);
	}
	return newArray;
}

sortArray(abc);

/*

There is an array of non-negative integers. A second array is formed by shuffling the elements of the first array and deleting a random element. Given these two arrays, find which element is missing in the second array.

*/
var firstArray = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
var secondArray = firstArray.slice(0);
var getRandomArbitrary = function() {
  return Math.floor(Math.random() * firstArray.length);
}

var shuffleArray = function(arr) {
    var temp, index;

    for(var i = 0; i < arr.length; i++) {
    	index = getRandomArbitrary();
    	temp = arr[i];
      	arr[i] = arr[index];
        arr[index] = temp;
    }
    return arr;
}

shuffleArray(secondArray);

secondArray.splice(getRandomArbitrary(), 1);

var findMissing = function(arrOne, arrTwo) {
	var missingNum;
	for(var i = 0; i < arrOne.length; i++) {
		if(arrTwo.indexOf(arrOne[i]) === -1) {
			missingNum = arrOne[i];
		}
	}
	return missingNum;
}

findMissing(firstArray, secondArray);
/*

Write a function that returns the longest word(s) from a sentence. The function should not return any duplicate words (case-insensitive).

Example

*/
var longestWords = function(str) {
	var newArray = [];
	var wordArray = str.toLowerCase().split(" ");
	wordArray.sort(function(a,b) {
		return b.length - a.length
	});

	newArray.push(wordArray[0]);

	if(wordArray[0].length === wordArray[1].length && wordArray[0] !== wordArray[1]) {
		newArray.push(wordArray[1]);
	}
	return newArray;
}

longestWords("You are just an old antidisestablishmentarian") // ["antidisestablishmentarian"]
longestWords("I gave a present to my parents") // ["present", "parents"]
longestWords("Buffalo buffalo Buffalo buffalo buffalo buffalo Buffalo buffalo") // ["buffalo"] or ["Buffalo"]

/*

If we list all the natural numbers below 10 that are multiples of 3 or 5, we get 3, 5, 6 and 9. The sum of these multiples is 23.

Find the sum of all the multiples of 3 or 5 below 1000.

*/
var sumOfNaturals = function(num) {
	var sum = 0;
	for(var i = 0; i < num; i++) {
		if(i % 3 === 0 || i % 5 === 0) {
			sum += i;
		}
	}
	return sum;
}

sumOfNaturals(1000);

/*

Remove duplicate characters in a given string keeping only the first occurrences. For example, if the input is ‘tree traversal’ the output will be "tre avsl".

*/
var sentence = 'tree traversal';
debugger;
var removeDuplicates = function(str) {
	str = str.split("");
	for(var i = 0; i < str.length; i++) {
		if(str.indexOf(i)) {
			console.log(str.indexOf(i));
		}
	}
	return str.join("");
}

removeDuplicates(sentence);

/*
Write a sum method which will work properly when invoked using either syntax below.

console.log(sum(2,3));   // Outputs 5
console.log(sum(2)(3));  // Outputs 5

*/
