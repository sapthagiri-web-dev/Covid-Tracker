const newcases = document.querySelector("#new-cases");
const newDeath = document.querySelector("#new-death");
const newRecov = document.querySelector("#new-recov");
const totalDeath = document.querySelector("#total-death");
const Refresh = document.querySelector("#refresh");
const url = "https://api.covid19api.com/summary";

Refresh.addEventListener("click", getData);

function getData() {
  fetch(url)
    .then((res) => res.json())
    .then((data) => {
      totalDeath.innerHTML = data.Global.TotalDeaths.toLocaleString("en");
      newRecov.innerHTML = data.Global.NewRecovered.toLocaleString("en");

      newDeath.innerHTML = data.Global.NewDeaths.toLocaleString("en");
      newcases.innerHTML = data.Global.NewConfirmed.toLocaleString("en");

      data.Countries.forEach((val) => {
        if (val.Country == "India") {
          console.log(val);
          document.querySelector(
            "#new-cases-In"
          ).innerHTML = val.NewConfirmed.toLocaleString("en");
          document.querySelector(
            "#new-death-In"
          ).innerHTML = val.NewDeaths.toLocaleString("en");
          document.querySelector(
            "#new-recov-In"
          ).innerHTML = val.NewRecovered.toLocaleString("en");
          document.querySelector(
            "#total-death-In"
          ).innerHTML = val.TotalDeaths.toLocaleString("en");
        }
      });

      document.querySelector("#dated").innerHTML = data.Date.slice(0, 10);
    });
}
