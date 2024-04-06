const clock = document.getElementById('clock');

setInterval(()=>{
    let date = new Date();
    clock.innerHTML = date.toLocaleTimeString();
},1000)


// function createDate(){
//     const div = document.querySelector('div')
//     const dateType = document.createElement("input")
//     dateType.type = "date";
//     div.appendChild(dateType)

// }

// const btn = document.querySelector('button')
// btn.addEventListener(('click'),()=>{
//     createDate();
// })