const wrapper = document.querySelector(".wrapper"),
  inputPart = wrapper.querySelector(".input-part"),
  infoTxt = inputPart.querySelector(".info-txt"),
  inputField = inputPart.querySelector("input"),
  locationBtn = inputPart.querySelector("button");

let api;

inputField.addEventListener("keyup", (e) => {
  if (e.key == "enter" && inputField.value != "") {
    requestApi(inputField.value);
  }
});

locationBtn.addEventListener("click", () => {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(onSuccess, onerror);
  } else {
    alert("Your browser not respond to geolocation Api");
  }
});

function onSuccess(poistion) {
  const { latitude, longitude } = poistion.coords;
   api = `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid={metric&appid=5c87ff925caefd27334370a03aa417e9}`;
}

function onerror(error) {
  infoTxt.innerHTML = error.message;
  infoTxt.classList.add("error");
}

function requestApi(city) {
 api = `https://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=5c87ff925caefd27334370a03aa417e9`;
}

function fetchData() {
  infoTxt.innerHTML = "getting weather updates";
  infoTxt.classList.add("padding");
  fetch(api)
    .then((response) => response.json())
    .then((result) => weatherDetails(result));
}

function weatherDetails(info) {
  console.log(info);
}
