var countries = ["india","china","russia","japan"];

var states = new Array("rajastha","delhi","mumbai","mp");

// console.log(states)
// console.log(states[0])
// console.log(states[1])
// console.log(states[2])
// console.log(states[3])
// console.log(countries)

// console.log(states.length)                                         // length of array
states[1]="punjab";
// console.log(states[1])



// we can insert many types of data types in an array but its not a good approach
var user = ["prashuk","29jainprashuk@gmail.com",3,6,true];
console.log(user);

user.pop()                                                             //pops last value
console.log(user)

user.unshift("new value")                                              //unshift
console.log(user)

user.shift()                                                            //shift
console.log(user)

console.log(user.indexOf("prashuk"))                                    //to find index

console.log(Array.from("prashuk"))                                      // string to array
console.log(Array.from("1234567"))                                      // number to array