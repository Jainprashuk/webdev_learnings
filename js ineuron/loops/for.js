// for (let i = 0; i < 10; i++) {
//     // const element = i;
//     console.log(i)
// }


// const mystates =["rajasthan","delhi","assam","1222"]
// for (let i = 0; i < mystates.length; i++) {
//     console.log(mystates[i])
// }


const mystates =["rajasthan","delhi","assam",1222]
for (let i = 0; i < mystates.length; i++) {
    if (typeof mystates[i] != 'string') {
        continue
    }
    console.log(mystates[i])
}