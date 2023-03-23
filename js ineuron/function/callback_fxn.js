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

var result = [2,3,4,5,56,7,7].every(iseven)
console.log(result)


                        //   callback

// way 1
var result = [2,4,6,8].every( (e) => {
    return e % 2 === 0;                          
})

// .way 2
var result = [2,4,6,8].every( (e) =>  (e % 2 === 0));
console.log(result)

