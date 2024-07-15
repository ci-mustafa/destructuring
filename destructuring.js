/**
 * To run this file in Gitpod, use the 
 * command node destructuring.js in the terminal
 */

// Destructuring arrays

let ages = [20, 30, 40];
let [ali, mustafa, christian] = ages;
console.log("Ali's age: ", ali);
console.log("Mustafa's age: ",mustafa);
console.log("Christian's age: ",christian);
// Destructuring objects

let studentScores = {
    bob : 45,
    john : 67,
    alice : 90,
}

let {bob, john, alice} = studentScores;
console.log("Bob's score: ", bob);
console.log("John's score: ", john);
console.log("Alice's score: ", alice);
// Destructuring subsets

let subjects = ["python", "js", "docker", "django"];
let [, , masoud, alia] = subjects;
console.log("Masoud's subject: ", masoud);
console.log("Alia's subject: ", alia);

// Using rest parameter syntax

let names = ["hamid", "khan", "john", "farhad", "safi"];
let [afghan, iran, ...tajik] = names;
console.log("Afghan's nation: ", afghan);
console.log("Iran's nation: ", iran);
console.log("Tajik's nation: ", tajik);