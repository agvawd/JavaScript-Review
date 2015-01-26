/* Declare and Define the functions here that will make the function calls below work properly */
var first = function(arr, callBack) {
  return callBack(arr[0]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
first(names, function(firstName){
  console.log('The first name in names is ', firstName)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var last = function(arr, callBack) {
  return callBack(arr[arr.length -1]);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
last(names, function(lastName){
  console.log('The last name in names is ', lastName);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

//have the contains function return a boolean value for if the name is in the array or not.
var contains = function(name, arr, callBack) {
  var flag = false;
  for(var i = 0; i < arr.length; i++) {
    if(arr[i] === name) {
      flag = true;
    }
  }
  return callBack(flag);
}


var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
contains('Colt', names, function(yes){
  if(yes){
    console.log('Colt is in the array');
  } else {
    console.log('Colt is not in the list');
  }
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var map = function(arr, callBack) {
  var newArray = [];
  for(var i = 0; i < arr.length; i++) {
    var num = callBack(arr[i]);
    newArray.push(num);
  }
  return newArray;
}


var numbers = [1,2,3,4,5];
//Produces a new array of values by mapping each value in list through a transformation function
map(numbers, function(num){
  return num * 2; //returns an array of [2,4,6,8,10]
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */
var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];

var uniq = function(arr, callBack) {
  for(var i = 0; i < arr.length; i++) {
    for(var j = i; j < arr.length; j++) {
      if(arr[i] === arr[j + 1]) {
        arr.slice(j + 1, 1);
        j--;
      }
    }
  }
  return callBack(arr);
}

uniq(names, function(uniqArr){
  console.log('The new names array with all the duplicate items removed is ', uniqArr);
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var each = function(names, callBack) {
  for (var i = 0; i < names.length; i++) {
    callBack(names[i], i);
  }
  return names;
}

var names = ['Tyler', 'Cahlan', 'Ryan', 'Colt', 'Tyler', 'Blaine', 'Cahlan'];
each(names, function(item, indice){
  console.log('The item in the ' + indice + ' position is ' + item)
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var getUserById = function(lookFor, arr, callBack) {
  var found;
  for(var i = 0; i < arr.length; i++) {
    if(lookFor === arr[i].id) {
      found = arr[i];
    }
  }
  return callBack(found);
}


var users = [
  {
    id: '12d',
    email: 'tyler@gmail.com',
    name: 'Tyler',
    address: '167 East 500 North'
  },
  {
    id: '15a',
    email: 'cahlan@gmail.com',
    name: 'Cahlan',
    address: '135 East 320 North'
  },
  {
    id: '16t',
    email: 'ryan@gmail.com',
    name: 'Ryan',
    address: '192 East 32 North'
  },
];
getUserById('16t', users, function(user){
  console.log('The user with the id 16t has the email of ' + user.email + ' the name of ' + user.name + ' and the address of ' + user.address); 
});




/* NEXT PROBLEM - NEXT PROBLEM - NEXT PROBLEM */

var find = function(arr, callBack) {
 for(var i = 0; i < arr.length; i++) {
  if (callBack(arr[i]))
    return arr[i];
 }
}



//Looks through each value in the list, returning the first one that passes a truth test 
var numbers  = [1, 2, 3, 4, 5, 6];
find(numbers, function(num){ 
  return num % 2 == 0; //should return 2
})
