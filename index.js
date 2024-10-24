const currentCityTag = document.querySelector(".current-city");
let currentCity = localStorage.getItem("city");

// Daca nu avem oras salvat in localStorage, salvam orasul default, adica Bucuresti.
if (!currentCity) {
  localStorage.setItem("city", "București");
  currentCity = "București";
}

// Actualizam orasul afisat pe ecran.
currentCityTag.innerHTML = currentCity;

// Afisam vremea curenta si predictia pe 5 zile.
displayCurrentWeather(currentCity);
displayWeatherForecast(currentCity);



const scrollButton = document.querySelector(".scroll-to-top");
const visibilityScroll = document.querySelector(".visibility");

scrollButton.addEventListener("click" , () => {
    window.scroll(0, 0);
})


function scrollSize() {
  if (window.scrollY > window.innerHeight/2) {
    visibilityScroll.classList.remove("visibility")
  } else {
     visibilityScroll.classList.add("visibility");
  }
}

window.addEventListener("scroll", scrollSize);