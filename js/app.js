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

//1.  Make an array that holds all of the colors of the rainbow.
const colorsOfTheRainbow = ["red", "orange", "yellow", "green", "blue", "purple", "red", "black"]

//2. Write code that will access "blue" from the rainbow array.
console.log(colorsOfTheRainbow[4]);

//3.  Make an object that is called your name and holds the information about your favorite food, a hobby, the name of the town that you live in currently, and your favorite datatype.
const susedCabrera = {
	favoriteFood: "Chiles Rellenos", 
	hobby: "running",
	city: "Denver",
	favoriteDatatype: "numbers"
}

//4.  Write code that will access your hobby from the object that you just created.
console.log(susedCabrera.favoriteFood);





















