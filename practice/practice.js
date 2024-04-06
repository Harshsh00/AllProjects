// set interval change Color project

// const randomColor = () => {
//     const rex = "0123456789abcdef";
//     let color = "#";
//     for (let i = 0; i < 6; i++) {
//       color += rex[Math.floor(Math.random() * 16)];
//     }
//     return color;
//   };

//   document
//     .querySelector(".start")
//     .addEventListener("click", startChangeColor);
//   document
//     .querySelector(".stop")
//     .addEventListener("click", stopChangeColor);
//   const box = document.querySelector("box");

//   //  change bg color
//   let intervalId;
//   function startChangeColor() {
//     if (!intervalId) {
//       intervalId = setInterval(changeBgcolor, 900);
//     }

//     function changeBgcolor() {
//       const intervalId = (document.body.style.backgroundColor =
//         randomColor());
//     }

//   }

//   function stopChangeColor() {
//     clearInterval(intervalId);

//     intervalId = null;
//   }

//Q.1  Write a JavaScript program to display the current day and time in the following format.

// outPut :-
//Today is : Tuesday.
//Current time is : 10 PM : 30 : 38

// const date = new Date();

// let day = date.getDay(date);


// dayList = ["sunday", "Monday" , "Tuesday" , "wednesday", "Thrusday", "Friday", "Saturday"];

// console.log("Today Date is:", dayList[day])

// const clock = document.getElementById('clock');

// setInterval(()=>{
//     let date = new Date();
//     clock.innerHTML = date.toLocaleTimeString();
// },1000)


// Q.4 Write a JavaScript program to find the area of a triangle where three sides are 5, 6, 7.



