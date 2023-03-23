var user = function (firstName,CourceCount) {
    this.firstName = firstName;
    this.CourceCount = CourceCount;
    this.gercourcecount = function () {
        console.log(`cource count is : ${this.CourceCount}`);
    }    ;
}

user.prototype.getfirstname = function () {
    console.log(`your first name is : ${this.firstName}`)
}

var prashuk = new user("prashuk",5)
// prashuk.gercourcecount()
// prashuk.getfirstname()
// console.log(prashuk)

var rohan = new user("rohan",0)
// rohan.gercourcecount()
// prashuk.getfirstname()
// console.log(rohan)

if (prashuk.hasOwnProperty("firstName")) {
    prashuk.getfirstname()
}