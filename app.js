const category = document.querySelectorAll(".category p");
const hours = document.querySelectorAll(".timeCategory h1");
const previousHours = document.querySelectorAll(".timeCategory p");
const cardSection = document.querySelectorAll(".cardSection");
const listItem = document.querySelectorAll(".list-item");
let json;

fetchData();
changeCardBgColor();

listItem.forEach(function (e) {
  e.addEventListener("mouseenter", function () {
    e.classList.add("active");
  });
});

listItem.forEach(function (e) {
  e.addEventListener("mouseleave", function () {
    e.classList.remove("active");
  });
});

listItem.forEach(function (e) {
  e.addEventListener("click", function (event) {
    switch (event.target.id) {
      case "daily":
        dailyInfo();
        break;
      case "weekly":
        weeklyInfo();
        break;
      case "monthly":
        monthlyInfo();
        break;
      default:
        break;
    }
  });
});

//Fetch app data

function fetchData() {
  fetch("data.json")
    .then((response) => {
      if (!response.ok) return console.log("Oops! Something went wrong.");

      return response.json();
    })
    .then((data) => {
      json = data;
      jsonData();
    });
}

// change background color of each card
function changeCardBgColor() {
  for (let i = 0; i < cardSection.length; i++) {
    switch (i) {
      case 0:
        cardSection[i].style.backgroundColor = "hsl(15, 100%, 70%)";
        break;
      case 1:
        cardSection[i].style.backgroundColor = "hsl(195, 74%, 62%)";
        break;
      case 2:
        cardSection[i].style.backgroundColor = "hsl(348, 100%, 68%)";
        break;
      case 3:
        cardSection[i].style.backgroundColor = "hsl(145, 58%, 55%)";
        break;
      case 4:
        cardSection[i].style.backgroundColor = "hsl(264, 64%, 52%)";
        break;
      case 5:
        cardSection[i].style.backgroundColor = "hsl(43, 84%, 65%)";
        break;

      default:
        break;
    }
  }
}

// Load page with initial data
function jsonData() {
  for (let i = 0; i < json.length; i++) {
    category[i].textContent = json[i].title;
    hours[i].textContent = json[i].timeframes.daily.current + "hrs";
    previousHours[i].textContent =
      "last week - " + json[i].timeframes.daily.previous + "hrs";
  }
}
// function for daily info
function dailyInfo() {
  for (let i = 0; i < json.length; i++) {
    category[i].textContent = json[i].title;
    hours[i].textContent = json[i].timeframes.daily.current + "hrs";
    previousHours[i].textContent =
      "last week - " + json[i].timeframes.daily.previous + "hrs";
  }
}
//function for weekly info
function weeklyInfo() {
  for (let i = 0; i < json.length; i++) {
    category[i].textContent = json[i].title;
    hours[i].textContent = json[i].timeframes.weekly.current + "hrs";
    previousHours[i].textContent =
      "last week - " + json[i].timeframes.weekly.previous + "hrs";
  }
}
//function for monthly info
function monthlyInfo() {
  for (let i = 0; i < json.length; i++) {
    category[i].textContent = json[i].title;
    hours[i].textContent = json[i].timeframes.monthly.current + "hrs";
    previousHours[i].textContent =
      "last week - " + json[i].timeframes.monthly.previous + "hrs";
  }
}
