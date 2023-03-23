var user = {
    name:"",
    getusername:function () {
        console.log(`user name is ${this.name}`);
    }
}

var hitesh = Object.create(user)
console.log(hitesh)

hitesh.name = "prashuk jain"
hitesh.getusername()

var sam  = Object.create(user,{
    name:{value:"sammy"},
    courcecount : {value:3},
})

sam.getusername()