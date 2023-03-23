var testarray = [12,54,34,5,455555,234];

console.log(testarray.fill(0))      //fill all elements of array with the element u give
console.log(testarray.fill("h",2))  // //fill all elements of array after certain index  with the element u give 
console.log(testarray.fill("x",2,6))

const array = [1,2,3,4,5,65,43,21,34];
const result = array.filter((num)=>num!=55);
console.log(result);