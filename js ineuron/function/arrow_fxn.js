// way 1
function iseven(element) {
    // approach 1
    // if (element%2===0) {
    //     return true
    // }
    // return false

    // approach 2
    return element % 2 === 0;
}

// way 2
var iseven = function(element) {
    // approach 1
    // if (element%2===0) {
    //     return true
    // }
    // return false

    // approach 2
    return element % 2 === 0;
}

// way 3
var iseven = (element) => {
    // approach 1
    // if (element%2===0) {
    //     return true
    // }
    // return false

    // approach 2
    return element % 2 === 0;
}

console.log(iseven(5))