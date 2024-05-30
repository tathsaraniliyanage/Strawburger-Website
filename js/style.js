/* Set the width of the sidebar to 250px (show it) */
function openNav() {
    document.getElementById("mySidepanel").style.width = "250px";
    
  }
  
  /* Set the width of the sidebar to 0 (hide it) */
  function closeNav() {
    document.getElementById("mySidepanel").style.width = "0";
  }







  const rootDoc = document.querySelector(":root");
const toggleThemeBtn = document.querySelector("#moon-btn");
const addDarkTheme = () => {
  rootDoc.style.setProperty("--text-color", "#fff");
  // rootDoc.style.setProperty("--bg-color", "#050127");
  rootDoc.style.setProperty("--bg-color", "rgb(4, 5, 15)");
  rootDoc.style.setProperty("--bg-off-white", "#ff8a8a");
};
const addLightTheme = () => {
  rootDoc.style.setProperty("--text-color", "#000");
  rootDoc.style.setProperty("--bg-color", "#fff");
  rootDoc.style.setProperty("--bg-off-white", "#f1e9e7");
};
const darkThemeToggleBtn = () => {
  toggleThemeBtn.classList.remove("fa-moon");
  toggleThemeBtn.classList.add("fa-sun");
};
const lightThemeToggleBtn = () => {
  toggleThemeBtn.classList.add("fa-moon");
  toggleThemeBtn.classList.remove("fa-sun");
};
toggleThemeBtn.addEventListener("click", () => {
  if (toggleThemeBtn.classList.contains("fa-moon")) {
    darkThemeToggleBtn();
    addDarkTheme();
    localStorage.setItem("theme", "dark");
  } else {
    localStorage.removeItem("theme");
    lightThemeToggleBtn();
    addLightTheme();
  }
});
window.addEventListener("DOMContentLoaded", () => {
  if (localStorage.getItem("theme")) {
    addDarkTheme();
    darkThemeToggleBtn();
  } else {
    addLightTheme();
    lightThemeToggleBtn();
  }
});





// udin ena alert ek

function myFunction() {
  alert("Cart added Succssfully");
}



// add to cart click krma popup wena ek
// When the user clicks on div, open the popup
function myFunction() {
  var popup = document.getElementById("myPopup");
  popup.classList.toggle("show");
}