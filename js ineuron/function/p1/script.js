var counter = document.querySelector(".counter")
var followers = document.querySelector(".followers")

let count = 0;
setInterval(()=>{
    if (count<=1000) {
        count++;
        counter.innerText = count;
    }
    
},1)

setTimeout(()=>{
followers.innerText = "followers on insta"
},5500)

