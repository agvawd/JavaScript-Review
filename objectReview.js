//Make a 'favoriteThings' object that contains the following keys: band, food, person, book, movie, holiday. Have the values to those keys be your favorite thing in that category. 

  //Your code here
  var favoriteThings = {
    band: "The Summer Set",
    food: "Donair",
    person: "Myself",
    book: "None",
    movie: "The Hobbit",
    holiday: "Birthday"
  }

//After you've made your object, add another key named 'car' with the value being your favorite car and then another key named 'brand' with the value being your favorite brand.

  //Your code here
  favoriteThings.car = "lambo";

//Now change the food key in your favoriteThings object to be 'Lettuce' and change the book key in your favoriteThings object to be '50 Shades of Gray'. 

  //Your code here
  favoriteThings.food = "Lettuce";
  favoriteThings.book = "50 Shades of Grey";

//Now, alert your favorite person, then alert your favorite book.

  //Your code here
  alert(favoriteThings.food);
  alert(favoriteThings.book);



/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



var user = {
    name: 'Tyler McGinnis', 
    email: null,
    pwHash: 'U+Ldlngx2BYQk',
    birthday: undefined,
    username: 'tylermcginnis33',
    age: 0
}

//Above you're given a user object. Loop through the user object checking to make sure that each value is truthy. If it's not truthy, remove it from the object. hint: 'delete'.

  //Your code here
  for(key in user) {
    if(!user[key]) {
      delete user[key];
    }
  }

//Once you get your truthy object, Change the remaining values in the object to be specific to you (name: 'your name', username: 'your username'), rather than my information.

  //Your code here
  user.name = "Allen";
  user.username = "agvawd";

//Now console.log your object and make sure it looks right.

  //Your code here
  console.log(user.name);
  console.log(user.username);


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */



//create an empty object called methodCollection. 

  //Your code here
  var methodCollection = {};

//Now add two methods (functions that are properties on objects) to your methodCollection object. One called 'alertHello' which alerts 'hello' and another method called logHello which logs 'hello' to the console. 

  //Your code here
  methodCollection.alertHello = function() {
    alert("Hello");
  }

  methodCollection.logHello = function() {
    console.log("Hello");
  }

//Now call your alertHello and logHello methods. 

  //Your code here
methodCollection.alertHello();
methodCollection.logHello();


/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var theOdyssey = "function expression or function declaration? Tis an obvious choice";
//write a function called voweler that accepts a string, and returns an object with the keys being all the vowels in that 
//string, and the values being how many times that particular vowel was in the string.
//voweler("This is a test") --> {i: 2, a: 1, e: 1};
var voweler = function(str) {
  str = str.toUpperCase();
  var VowelObj = { a: 0, e: 0, i: 0, o: 0, u: 0 }
  for(var i = 0; i < str.length; i++) {
    if(str[i] === "A"){
      VowelObj['a']++;
    }
    else if(str[i] === "E") {
     VowelObj["e"]++; 
    }
    else if (str[i] === "I"){
      VowelObj["i"]++;
    }
    else if (str[i] === "O") {
      VowelObj["o"]++;
    }
    else if (str[i] === "U") {
      VowelObj["u"]++;
    }
  }
  for(key in VowelObj){
    if(!VowelObj[key]) {
      delete VowelObj[key];
    }
  }
  return VowelObj;
}

voweler(theOdyssey);

//Short Version
var voweler = function(str) {
  var VowelObj = { a: 0, e: 0, i: 0, o: 0, u: 0 }
  for(var i = 0; i < str.length; i++) {
    str[i].toUpperCase() === "A" ? VowelObj["a"]++ : null || 
    str[i].toUpperCase() === "E" ? VowelObj["e"]++ : null ||
    str[i].toUpperCase() === "I" ? VowelObj["i"]++ : null || 
    str[i].toUpperCase() === "O" ? VowelObj["o"]++ : null || 
    str[i].toUpperCase() === "U" ? VowelObj["u"]++ : null; }
  for (key in VowelObj) {
    !VowelObj[key] ? delete VowelObj[key] : null; }
  return VowelObj; }

  //Justin's Short Version
  var voweler = function(str) {
    var VowelObj = { a: 0, e: 0, i: 0, o: 0, u: 0 };
    for(key in VowelObj)
      for (var i = 0; i < str.length; i++)
        key === str[i].toLowerCase() ? VowelObj[key]++ : null;
    for (key in VowelObj) !VowelObj[key] ? delete VowelObj[key] : null; 
    return VowelObj;};