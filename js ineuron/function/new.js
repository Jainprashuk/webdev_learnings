var user = function (firstName,CourceCount) {
    this.firstName = firstName;
    this.CourceCount = CourceCount;
    this.gercourcecount = function () {
        console.log(`cource count is : ${this.CourceCount}`);
    }    ;
}


var prashuk = new user("prashuk",5)
prashuk.gercourcecount()
// console.log(prashuk)

var rohan = new user("rohan",0)
rohan.gercourcecount()
// console.log(rohan)