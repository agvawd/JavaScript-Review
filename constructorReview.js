//Create a Animal Constructor that has the following parameters. species, name, legs, color, food (which is an array of foods they can eat).

  //code here
  var Animal = function(species, name, legs, color, food) {
    this.species = species;
    this.name = name;
    this.legs = legs;
    this.color = color;
    this.food = ['grapes', 'human legs', 'Justin\'s face', 'mushrooms'];
  }


//Now create a person function that creates an object and returns it (not in constructor form) that has the following parameters. name, age, height, gender

  //code here
  var Person = function(name, age, height, gender) {
    var newPerson = {
      name: name,
      age: age,
      height: height,
      gender: gender
    } 
    return Person;
  }


//Create a animal array and a person array.

  //code here
var animalArray = [];
var personArray = [];

//Create two instances of Animal and push those into your animal array

  //code here

  var dog = new Animal("Dog", "Koli", 4, "Brown", "dog food");
  var cat = new Animal("Cat", "Stupid", 4, "White", "cat food");
  animalArray.push(dog, cat);


//Create two instances of person and push those into your person array.

  //code here
  var Allen = new Person("Allen", 23, "5'10", "Male");
  var Justin = new Person("Justin", 22, "3'2", "Unknown");
  personArray.push(Allen, Justin);


//Now we want every instance of Animal to have a eat method. This method will choose a random item in that instances food array, then alert "(name) ' ate ' (whichever food was chosen)".

  //code here
  Animal.prototype.eat = function() {
    var randNum = Math.floor(Math.random() * this.food.length);
    alert(this.name + ' ate ' + this.food[randNum]);
  }


//At this point, if we wanted to add something to every istance of person could we? 

  //Yes or no? and why or why not?
//Yes but it would not be worth it


/*
  1) What happens when you use the 'new' keyword to call a Constructor function?
    //it creates a new instance of that object
  2) What's a good way to describe the keyword 'this'
    //It references the object it is in
  3) Can a normal function which creates an object and then returns that object use the prototype?
    //yes it can
  4) What happens if you forget to use 'new' when calling a constructor?
    //It results in undefined
*/