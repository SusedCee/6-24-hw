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

// const inception = {
//    reality: {
//        dreamLayer1: {
//            dreamLayer2: {
//                dreamLayer3: {
//                    dreamLayer4: {
//                        dreamLayer5: {
//                            dreamLayer6: {
//                                limbo: "Joseph Gordon Levitt"
//                           }
//                        }
//                    }
//                }
//            }
//        }
//    }
// }

// //Change the value of limbo to null.
// inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo = "null";
// console.log(inception.reality.dreamLayer1.dreamLayer2.dreamLayer3.dreamLayer4.dreamLayer5.dreamLayer6.limbo);


//5. BOND FILMS

const bondFilms = [
  { "title" : "Skyfall", "year" : 2012, "actor" : "Daniel Craig", "gross" : "$1,108,561,008" },
  { "title" : "Thunderball", "year" : 1965, "actor" : "Sean Connery", "gross" : "$1,014,941,117" },
  { "title" : "Goldfinger", "year" : 1964, "actor" : "Sean Connery", "gross" : "$912,257,512" },
  { "title" : "Live and Let Die", "year" : 1973, "actor" : "Roger Moore", "gross" : "$825,110,761" },
  { "title" : "You Only Live Twice", "year" : 1967, "actor" : "Sean Connery", "gross" : "$756,544,419" },
  { "title" : "The Spy Who Loved Me", "year" : 1977, "actor" : "Roger Moore", "gross" : "$692,713,752" },
  { "title" : "Casino Royale", "year" : 2006, "actor" : "Daniel Craig", "gross" : "$669,789,482" },
  { "title" : "Moonraker", "year" : 1979, "actor" : "Roger Moore", "gross" : "$655,872,400" },
  { "title" : "Diamonds Are Forever", "year" : 1971, "actor" : "Sean Connery", "gross" : "$648,514,469" },
  { "title" : "Quantum of Solace", "year" : 2008, "actor" : "Daniel Craig", "gross" : "$622,246,378" },
  { "title" : "From Russia with Love", "year" : 1963, "actor" : "Sean Connery", "gross" : "$576,277,964" },
  { "title" : "Die Another Day", "year" : 2002, "actor" : "Pierce Brosnan", "gross" : "$543,639,638" },
  { "title" : "Goldeneye", "year" : 1995, "actor" : "Pierce Brosnan", "gross" : "$529,548,711" },
  { "title" : "On Her Majesty's Secret Service", "year" : 1969, "actor" : "George Lazenby", "gross" : "$505,899,782" },
  { "title" : "The World is Not Enough", "year" : 1999, "actor" : "Pierce Brosnan", "gross" : "$491,617,153" },
  { "title" : "For Your Eyes Only", "year" : 1981, "actor" : "Roger Moore", "gross" : "$486,468,881" },
  { "title" : "Tomorrow Never Dies", "year" : 1997, "actor" : "Pierce Brosnan", "gross" : "$478,946,402" },
  { "title" : "The Man with the Golden Gun", "year" : 1974, "actor" : "Roger Moore", "gross" : "$448,249,281" },
  { "title" : "Dr. No", "year" : 1962, "actor" : "Sean Connery", "gross" : "$440,759,072" },
  { "title" : "Octopussy", "year" : 1983, "actor" : "Roger Moore", "gross" : "$426,244,352" },
  { "title" : "The Living Daylights", "year" : 1987, "actor" : "Timothy Dalton", "gross" : "$381,088,866" },
  { "title" : "A View to a Kill", "year" : 1985, "actor" : "Roger Moore", "gross" : "$321,172,633" },
  { "title" : "License to Kill", "year" : 1989, "actor" : "Timothy Dalton", "gross" : "$285,157,191" }
];

//5. Create a new array called bondTitles with only 
//the titles of the Bond films, and console.log the
// new array.

// bondFilms.push({ "bondTitles" : ["Skyfall", "Thunderball", "Goldfinger", "Live and Let Die", "You Only Live Twice", "The Spy Who Loved Me", "Casino Royale", "Moonraker", "Diamonds Are Forever", "Quantum of Solace", "From Russia with Love", "Die Another Day", "Goldeneye", "On Her Majesty's Secret Service", "The World is Not Enough", "For Your Eyes Only", "Tomorrow Never Dies", "The Man with the Golden Gun", "Dr. No", "Octopussy", "The Living Daylights", "A View to a Kill", "License to Kill"] });
// console.log(bondFilms[23]);

// const findTheTitles = () => {
// 	let bondTitle = []
// 	for (i = 0; i < bondFilms.length; i++){
// 	bondTitle.push(bondFilms[i]["title"])
// //for (let bondFilms[key]["title"]);{//have to use brackets to use quotations, in this case referencing [brackets]
// } return bondTitle
// }
// console.log(findTheTitles());


//6. Create a new array oddBonds, of only the Bond
// films released on odd-numbered years.

const findOddBonds = () => {
	let oddBonds = []
	for(i = 0; i < bondFilms.length; i++){
		if(bondFilms[i]["year"]%2 !== 0){
		oddBonds.push(bondFilms[i]["year"])
		}
	} return oddBonds
}
console.log(findOddBonds());




// 7. Determine the total cumulative gross of the 
// Bond franchise, and console.log the result.

// alert(bondFilms["gross"].replace(/$,/g, " "));
// console.log(bondFilms[0]);



// const findTotalCumulativeGross = () => {
// 	let cumulativeGross = []
// 	for(i = 0; i < bondFilms.length; i++){
// 		if(i%2 !== 0){
// 		oddBonds.push(bondFilms[i]["year"]);
// 		}
// 	} return oddBonds
// }
// console.log(findOddBonds());








































