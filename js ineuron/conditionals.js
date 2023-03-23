// if 
// if else
// nested if  {better to use multipe id one after another then nested if}
// switch case 


// ...............................................................................................................................................
var temp;
temp = 45;
if (temp < 60) {
    console.log("temp is less")
}

if (temp < 20) {
    console.log("too cold")
} else {
    console.log("too hot")
}
// .................................................................................................................................................

// switch case 

var user = "testprep";

switch (user) {
    case "admin":
        console.log("you get full access")
        break;

    case "subadmin":
        console.log("you get  access to create and deleate")
        break;

    default:
        console.log("wrong user")
        break;
}