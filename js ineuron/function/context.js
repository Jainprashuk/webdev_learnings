say_hello();

function say_hello() {
    console.log("hello")
}



// global context          browser  




// execution context       happen with every line of code
// 1-varible Object
// 2-scope chain
// 3-this

function tipper(a) {
    var bill = parseInt(a);
    console.log(bill+5);
}

tipper(45)

// var tipper = function(a) {
//     var bill = parseInt(a);
//     console.log(bill+5);
// }  we can not call  fxn before this but inaNOTHer one can


console.log(xx)            //will give undefined
var xx = "helllloooo"