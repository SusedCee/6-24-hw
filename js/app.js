console.log("Works!");

//MIXED DATA TYPES

//1. DATA TYPES

//Suppose you are tasked with creating some software,
// and it is up to you to determine which datatypes 
//and what data structure to use. For each of the 
//following, write which data types you would use to 
//represent the data, and then give a small example 
//of the data structure:


// -A light switch that can be either on or off.
//boolean
//light: on,
//on would be true and off would be false.


// -A user's email address.
//array
//email: "",


// -A spaceship with a hull, laser blasters, tractor
//beam, and warp drive.
//array with string
//spaceship = ["hull", "laser", "blasters", "tractor beam", "wrap drive"]

// -A list of student names from our class.
//array with objects and strings
//studentNames = []

// -A list of student names from our class, each with
// a location.
//nested array with strings
// students = {
// 	name: "", 
// 	location: ""
// }

// -A list of student names from our class, each with
// a location and each with a list of favorite tv shows.
//nested array with objects
// students = {
// 	name: "",
// 	location: "",
// 	shows: []
// }



//2. TAKE IT EASY

// //1.  Make an array that holds all of the colors of the rainbow.
// const colorsOfTheRainbow = ["red", "orange", "yellow", "green", "blue", "purple", "red", "black"]

// //2. Write code that will access "blue" from the rainbow array.
// console.log(colorsOfTheRainbow[4]);

// //3.  Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
// const susedCabrera = {
// 	favoriteFood: "Chiles Rellenos", 
// 	hobby: "running",
// 	city: "Denver",
// 	favoriteDatatype: "numbers"
// }

// //4.  Write code that will access your hobby from the object that you just created.
// console.log(susedCabrera.favoriteFood);



//3. CRAZY OBJECT!

// const crazyObject = {
//   taco: [
//     {
//       meat: 'steak',
//       cheese: ['panela', 'queso', 'chihuahua']
//     },
//     {
//       meat: 'chicken',
//       salsa: ["pico", "hot", "hotter", "really hot", "really really hot", "omg my mouth is burning"]
//     },
//   ],
//   larry: {
//     nicknames: ["LD", "Chicken Teriyaki Boyyyyyy"],
//     quotes: ["Pretty pretty prettayyyyy good", "Is that a parkinson's thing?", "women love a self confident bald man", "I'm a walking talking enigma"],
//     characters: [
//       {
//         name: "Jeff",
//         occupation: "manager"
//       },
//       {
//         name: "funkhauser",
//         occupation: "tv dude"
//       },
//       {
//         name: "susie",
//         occupation: "jeffs wife",
//         favoriteHobby: "Swearing at Larry and Jeff"
//       },
//     ]
//   }
// }

// // Use crazyObject to log the following.

// // -"omg my mouth is burning"
// console.log(crazyObject.taco[1].salsa[5]);

// // -"Pretty pretty prettayyyyy good"
// console.log(crazyObject.larry.quotes[0]);

// // -"Swearing at Larry and Jeff"
// console.log(crazyObject.larry.characters[2].favoriteHobby);

// // -"Chicken Teriyaki Boyyyyyy"
// console.log(crazyObject.larry.nicknames[1]);

// // -The object the contains the name funkhauser
// console.log(crazyObject.larry.characters[1]);


//4. OBJECT-CEPTION

const inception = {
   reality: {
       dreamLayer1: {
           dreamLayer2: {
               dreamLayer3: {
                   dreamLayer4: {
                       dreamLayer5: {
                           dreamLayer6: {
                               limbo: "Joseph Gordon Levitt"
                          }
                       }
                   }
               }
           }
       }
   }
}

//Change the value of limbo to null.
inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null";
console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);




































