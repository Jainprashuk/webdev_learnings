// changing data type //
// ...................//


// * string to num * //

// let fake_num = "25";
// let orgNum = Number(fake_num);
// console.log(typeof orgNum);
// console.log(typeof fake_num);


// * num to string * //

// let num_num = 345;
// let num_str = String(num_num)
// console.log( typeof num_num);
// console.log( typeof num_str);


//...................................................................................................................................


// * Destructuring and spread * //

// we want every value to be stored in another variables
// let arr = [2.34,4.56,5.55,6.67]
// let [a,b,c,d] = arr
// console.log(d);

// let fullstack = [
//     ["html","css","js","tailwind"],
//     ["nodejs","express","mongodb"]
// ];

// let[frontend,backend]=fullstack;
// console.log(frontend);
// let arr2 = [1,2,3,4,5,6]
// let [a,,b,c] = arr2    //when we want to skip some values
// console.log(c);

// let ar = [1,2,3,4,5,6,7,8,9]
// let [a,b,...rest] = ar;
// console.log(a,b);
// console.log(rest);


//...................................................................................................................................


// * Spread Operator * //

// function sum(x,y) {
//     return x+y;
// }
// let vari = [5,7];
// console.log(sum(...vari));   //spread operator


//...................................................................................................................................


// * Rest  Operator * //

// function sum(...args) {
//     let sum  = 0;
//     for (let a of args) {
//     sum = sum+a;
// }
// return sum;
// }
// console.log(sum(1,2,3,4,5,6));


//...................................................................................................................................


// new : keyword


// --- way 1 to create object --- 
// let person = {
//     name :"prashuk",
// }
// console.log(person);


// --- way 2 to create object --- 
// let person = new Object();
// person.name = "prashuk";
// console.log(person);



// var person = function (firstName , CourceCount) {
//     this.firstName = firstName;
//     this.CourceCount = CourceCount;
// };

// var Anurag = new person("anurag" , 7)
// var prashuk = new person("prashuk" , 2)

// console.log(person);


//...................................................................................................................................

//  **  set and map ** //

// set :- always want unique values 

// let arr = [1,3,2,1,3,1,4,3,3,7,8]
// let num = new Set(arr);
// console.log(num);
// for (let i of num) {
//     console.log(i);
// }
// num.add(6)
// console.log(num);
// num.delete(6);
// console.log(num.has(1));



// map :- store in key value pair

// let newMap = new Map();
// console.log(map);
// newMap.set("1","one")
// newMap.set(2,"one")
// newMap.set(true,"one")
// console.log(newMap);

// key : values     // objects
// key => values    // maps  fat arrow

// let city = [
//     ["india" , "gujrat"],
//     ["indore" , "mp"],
//     ["jalandar" , "punjab"],
// ];
// let amap = new Map(city);
// console.log(amap);
// console.log(amap.get("jalandar"));


//...................................................................................................................................

//  **  Closure ** //
// closure :- when inner function access value of outer function 

// function outer() {
//     let var1 = "seven";
//     function inner() {
//         console.log(var1);
//     } 
//     inner()
// }
// outer()


// function outer() {
//     let var1 = "prashuk";
//     function inner() {
//         console.log(var1);
//     }
//     return inner ; // returning refrence of fxn inner
// }
// let var2 = outer()
// console.log(var2);   // function refrence
// var2() // calling fxn






















