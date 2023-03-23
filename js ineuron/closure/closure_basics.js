closure :- 



// function init() {
//     var firstName = "prashuk"
//     function sayfirstName() {
//         console.log(firstName)
//     }
//     return sayfirstName;
// }

// var value = init()
// console.log(value);
// Val ue()





function doAddition(x) {
    return function(y){
        return x+y;
    }
}

// way 1:-
var add = doAddition(4)
console.log(add(5));

// way 2:-
console.log(doAddition(5)(5))


