const red = document.querySelector(".box-1")
const blue = document.querySelector(".box-2")
const black = document.querySelector(".box-3")
const white = document.querySelector(".box-4")
const yellow = document.querySelector(".box-5")
const bg_col = document.querySelector(".home")

const center = document.querySelector(".center")
const GetBgColor = (selectedelement)=>{
    return window.getComputedStyle(selectedelement).backgroundColor
}

// console.log(GetBgColor(red))
// console.log(GetBgColor(blue))
// console.log(GetBgColor(black))
// console.log(GetBgColor(white))
// console.log(GetBgColor(yellow))
console.log(GetBgColor(bg_col))


// var element_color = GetBgColor(black)

// black.addEventListener("mouseenter",()=>{
//     center.style.background = element_color
// })


const color_changer = (selected_element,element_color)=>{
    return selected_element.addEventListener("mouseenter",()=>{
        center.style.background = element_color
    })
}

color_changer(red,GetBgColor(red))
color_changer(blue,GetBgColor(blue))
color_changer(black,GetBgColor(black))
color_changer(white,GetBgColor(white))
color_changer(yellow,GetBgColor(yellow))
