console.log("tutorials for conditional expression")

// 1:- if
// 2:- if-else
// 3:- if-else-if


let a = prompt("age ?")
a = Number.parseInt(a)  //converting the string to number
console.log(typeof(a))

if (a>0) {
  alert("this is valid age")
}

// if (a<0) {
//   alert("enter valid age")
// } else {
//   alert("this is valid age")
// }

if (a<0) {
  alert("enter valid age")
} 
else if(a<18){
    alert("you are underage")
  }

else {
  alert("this is valid age")
}
