//==========Exercise #1 ===========//
/*
Write a function that parses through the below object and displays all of their
favorite food dishes as shown:
*/

let person3 = {
    pizza: ["Deep Dish", "South Side Thin Crust"],
    tacos: "Anything not from Taco bell",
    burgers: "Portillos Burgers",
    ice_cream: ["Chocolate", "Vanilla", "Oreo"],
    shakes: [
      {
        oberwise: "Chocolate",
        dunkin: "Vanilla",
        culvers: "All of them",
        mcDonalds: "Sham-rock-shake",
        cupids_candies: "Chocolate Malt",
      },
    ],
  };
  
  function displayFavoriteFood(person) {
    for (let key in person) {
        if (Array.isArray(person[key])) {
        console.log(`${key}: ${person[key].join(", ")}`);
      } else if (typeof person[key] === "object") {
        for (let subKey in person[key][0]) {
          console.log(`${subKey}: ${person[key][0][subKey]}`);
        }
      } else {
        console.log(`${key}: ${person[key]}`);
      }
    }
  }
  
  displayFavoriteFood(person3);


//=======Exercise #2=========//
/*
Write an object prototype for a Person that has a name and age, has a
printInfo method, and also has a method that 
increments the persons age by 1 each time the method is called.
Create two people using the 'new' keyword, and print 
both of their infos and increment one persons
age by 3 years. Use an arrow function for both methods
*/

function Person(name, age) {
    this.name = name;
    this.age = age;
  
    this.printInfo = () => {
      console.log(`Name: ${this.name}, Age: ${this.age}`);
    };
  
    this.addAge = (years) => {
      this.age += years;
    };
  }
  
  // Create two people using the 'new' keyword
  let person1 = new Person("John", 25);
  let person2 = new Person("Alice", 30);
  
  // Print their info
  person1.printInfo();
  person2.printInfo();
  
  // Increment one person's age by 3 years
  person1.addAge(3);
  
  // Print their info again
  person1.printInfo();
  person2.printInfo();
  

// =============Exercise #3 ============//
/*

    Create a Promised based function that will check a string to determine if it's length is greater than 10.
    If the length is greater than ten console log "Big word". 
    If the length of the string is less than 10 console log "Small Number"
*/
function checkStringLength(string) {
    return new Promise((resolve, reject) => {
      if (string.length > 10) {
        resolve("Big word");
      } else {
        reject("Small number");
      }
    });
  }
  
  // Usage example:
  checkStringLength("Hello, World!")
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  
  checkStringLength("Hi!")
    .then((message) => {
      console.log(message);
    })
    .catch((error) => {
      console.log(error);
    });
  