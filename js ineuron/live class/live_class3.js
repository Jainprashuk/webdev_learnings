// FOR LOOP

// for (initialization; condition; inc/dec) {
//     statement
// }

// for (let i = 0; i < 5; i++) {
//     console.log(`${i}*${i} = ${i*i}`);
// }
// let country = ["india","norway","sweden","iceland"];
// let new_coun = [];
// for (let i = 0; i < country.length; i++) {
//     new_coun.push(country[i].toUpperCase())
// }
// console.log(new_coun)


// ...............................................................................................................................................

// while

// let i = 0 ;
// while (i<5) {
//     console.log(i);
//     i++;
// }

//...............................................................................................................................................

// do while 

// i=1;
// do {
//     console.log(i);
//     i++;
// } while (i<=5);


//.................................................................................................................................................

// for of : for rray

// let arr = [1,2,3,4,5,6,7,8];
// for (let x of arr) {
//     console.log(arr[x])
// }

// let str_arr = ["india","norway","sweden","iceland"];
// for (let x of str_arr) {
//     // console.log(x)
//     console.log(x[0])
// }


//.................................................................................................................................................


// for in : for Object

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

// for (let x in user_details_cource) {
//     // console.log(x);
//     // console.log(user_details_cource[x]);
//     console.log(`key is ${x} and value is ${user_details_cource[x]}`);
// }


// ...............................................................................................................................................


// for each :- array

// let arr = ["hey","hi","a","dd"]
// arr.forEach(val => {
//     console.log(val)
// });


// ...............................................................................................................................................


// break and continue 

// for (let i = 1; i < 5; i++) {
//     if (i==3) {
//         break
//     }
//     console.log(i);
// }
// for (let i = 1; i < 5; i++) {
//     if (i==3) {
//         continue
//     }
//     console.log(i);
// }


// ................................................................................................................................................


// Functions : to make something reusable & to make it clean

// function square() {
//     let x=2;
//     return x*x;
// }

// function square(x) {
//     return x*x;
// }

// console.log(square()); //calling
// console.log(square(4)); //calling

// function sum_array(array) {
//     sum = 0;
//     for (let x =0; x<=5;x++) {
//         sum = sum+array[x];
//     }
//     // for (let x of array) {
//     //     sum = sum+x
//     // }
//     return sum
// }
// let num = [1,2,3,4,4,5]
// console.log(sum_array(num));

// arrow function :
// let abc = () => {
//     console.log("hello guys how are you");
// }
// abc()

// let sum_array = (array)=>{
//     sum = 0;
//     for (let x =0; x<=5;x++) {
//                 sum = sum+array[x];
//             }
//             return sum
// }
// x=sum_array(num)


// ........................................................................................................................................


// Date and time 

// let now = new Date()
// console.log(now.getTime())
// console.log(now.getFullYear())
// console.log(now.getMonth())   //starts from 0
// console.log(now.getDate())
// console.log(now.getDay())
// console.log(now.getHours())
// console.log(now)
// console.log(now.toString())
