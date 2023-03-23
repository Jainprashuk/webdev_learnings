// objects
var user = {
    first_name : "prashuk",
    last_name : "jain",
    role:"admin",
    mobile_num : 98765432,
    facebook_signed:true,
    courselist:[],
    buycourse : function (coursename) {
        this.courselist.push(coursename)
    },
    getcoursecount : function(){
        return `${this.first_name} is enrolled in total of ${this.courselist.length} cources`
    },
};

var courselist = true;
console.log(user.first_name)
console.log(user["last_name"]);
console.log(user.getcoursecount());
user.buycourse("react js courcs")
console.log(user.getcoursecount());