function print_hello(name) {
    console.log("hello world");
    console.log("hello world", name);
    console.log(`hello world , ${name}`)
}

print_hello(); //  call
print_hello; // refer

print_hello("prashuk");

// ................................................................................................................................................


// one way 
function namaste() {
    return "namastey bharat"
}

// another way 
namaste = function() {
    return "namastey bharat"
}

var x = namaste();
console.log(x);

console.log(namaste());

// ...................................................................................................................................................

function get_user_role(name, role) {
    switch (role) {
        case "admin":
            return `${name} is admin with all access`
            break; //not necesarry becouse of return
        case "subadmin":
            return `${name} is subadmin with access to create and delete courses`
            break; //not necesarry becouse of return
        case "testprep":
            return `${name} is testprep with all access`
            break; //not necesarry becouse of return
        case "user":
            return `${name} is user `
            break; //not necesarry becouse of return
        default:
            return `${name} is trial user` 
            break;
    }
}
console.log(get_user_role("prashuk","user"))

// ......................................................................................................................................................