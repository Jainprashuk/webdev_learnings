// undefined , null , 0 ,' ' , NaN  are falsy values
// treated as false 

// strict checking with data types we use === else we use ==
var user = "2";
if (user==2) {
    console.log("true")    // execute
}

var user = "2";
if (user===2) {
    console.log("true")    // not execute
}