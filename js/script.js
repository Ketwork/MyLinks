let date = new Date();
let currentHour = date.getHours();

let createTxtMsg;

if (currentHour >= 4 && currentHour < 10) {
  createTxtMsg = "Good morning!";
} else if (currentHour >= 10 && currentHour < 12) {
  createTxtMsg = "good day!";
} else if (currentHour >= 12 && currentHour < 18) {
  createTxtMsg = "good afternoon!";
} else if (currentHour >= 18 && currentHour < 22) {
  createTxtMsg = "good evening!";
} else if (currentHour >= 22 && currentHour < 4) {
  createTxtMsg = "good night!";
} else {
  createTxtMsg = "Are you from a different planet?";
}

document.querySelector(".greeting").innerText = createTxtMsg;