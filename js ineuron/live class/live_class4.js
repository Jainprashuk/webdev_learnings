// object 


// let object1 = {
//     first_name : "prashuk",
//     last_name  : "jain",
//     role : "admin",
//     login_count : 22,
// };

// console.log(object1.first_name);
// console.log(object1["first_name"]);  // same way but not good as it create ambiguity
// console.log(object1);
// console.table(object1);        //gives table view

// object1.login_count = 23
// console.log(object1);

// program 

// let user_details_cource = {
//     first_name   : "prashuk",
//     last_name    : "jain",
//     role         : "student",
//     google_login : true,
//     cource_list  : [],

//     buy_cource : function (cource_name) {
//         this.cource_list.push(cource_name)
//     },

//     user_cource_count : function () {
//         return `${this.cource_list.length}`
//     }
// };


// console.log(user_details_cource.first_name);

//calling function in object
// user_details_cource.buy_cource("web dev")

// console.log(user_details_cource.cource_list)    
// console.log(user_details_cource.user_cource_count())    

//keys
// console.log(Object.keys(user_details_cource));

//values
// console.log(Object.values(user_details_cource));

//check key
// console.log(user_details_cource.hasOwnProperty("first_name"));




// Array of objects 
// let appleProducts = [
//     {
//       name: "iPhone 13 Pro",
//       price: 999,
//       color: "Graphite",
//       storage: "128GB",
//     },
//     {
//       name: "iPad Pro",
//       price: 799,
//       color: "Silver",
//       storage: "128GB",
//     },
//     {
//       name: "MacBook Pro",
//       price: 1499,
//       color: "Space Gray",
//       storage: "256GB",
//     },
//     {
//       name: "AirPods Max",
//       price: 549,
//       color: "Space Gray",
//       type: "Over-ear headphones",
//     },
//     {
//       name: "Apple Watch Series 7",
//       price: 399,
//       color: "Midnight",
//       size: "41mm",
//     }
//   ];
  

//.........................................................................................................................................

//Heigher Order Function when something take a function as parameter


// 1) Callback_function : if we want to pass function to function 

// let isEven = (element) => {
//     return element % 2 == 0;
// };

// let value = [2,4,6,8].every(isEven)
// console.log(value);




// let square = (num) => {
//     return num**2;
// };

// function cube(square,num) {
//     return square(num)*num
// }

// function quad(cube,num){
//     return cube(square,num)*num
// }

// console.log(quad(cube,3))



// 2) timeout : when we want to get after some time

// function hello() {
//     console.log("hellloo .... , how are you !? ");
// }
// setTimeout(hello,5);



// 3) interval : for certain time only

// setInterval(() => {
//         console.log("hellloo .... , how are you !?")
// }, 3000);


///...................................................................................................................................

///  map

// let numbers = [1,2,3,4,5];
// let store = numbers.map((num)=>{return num*num})
// console.log(store);

// let names = ["hello","hiii","a","asd"];
// let p = names.map((name)=>{ return name.toUpperCase()})
// console.log(p);
 
// reduce()
// numbers.reduce((acc,curr)=>{},value)
// let sum = numbers.reduce((acc,cur)=>acc+cur,0)
// console.log(sum);


//...................................................................................................................................

// filter


// let country = ["india","japan","keniya","ireland"];
// let store = country.filter((c)=>c.includes("l"))
// let length_5 = country.filter((c)=>c.length===5)
// console.log(store);




// *** topics covered till now *** //
// 1) datatypes{Number,string,booliun,null, undefined}
// 2) conditional
// 3) math functions
// 4) array
// 5) loops
// 6) functions
// 7) objects
// 8) date
// 9) higher order function{callback,set interval,set timeout}
//10) map , filter , every , reduce













