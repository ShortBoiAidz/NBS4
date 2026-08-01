function toggleDarkMode() {
  const elementRoot = document.documentElement;
  const body = document.body;
  const moonIcon = document.getElementById("themeToggleMoon");
  const sunIcon = document.getElementById("themeToggleSun");
  const headerIcon = document.getElementsByClassName("headerIcon");
  const logo = document.getElementById("logo");

  moonIcon.style.setProperty("display", "none");
  sunIcon.style.setProperty("display", "block");
  sunIcon.style.setProperty("color", "#c9c9c9");

  body.style.setProperty("background-image", "url('/images/recolourfulCathedral.png')");

  for (let i = 0; i < headerIcon.length; i++) {
    headerIcon[i].style.setProperty("color", "#c9c9c9");
  }

  elementRoot.style.setProperty("--darkGradPrimTrans", "rgba(30, 30, 30, 0.5)");
  elementRoot.style.setProperty("--darkGradSecTrans", "rgb(91, 90, 90, 0.5)");
  elementRoot.style.setProperty("--lightGradPrimTrans", "rgb(125, 125, 125, 0.5)");
  elementRoot.style.setProperty("--lightGradSecTrans", "rgb(185, 185, 185, 0.5)");

  elementRoot.style.setProperty("--darkGradPrim", "rgba(30, 30, 30)");
  elementRoot.style.setProperty("--darkGradSec", "rgb(91, 90, 90)");
  elementRoot.style.setProperty("--lightGradPrim", "rgb(125, 125, 125)");
  elementRoot.style.setProperty("--lightGradSec", "rgb(185, 185, 185)");

  localStorage.setItem('theme', 'dark');

  logo.src = "images/noodleboxLogoDark.png";
};

function toggleLightMode() {
  const body = document.body;
  const elementRoot = document.documentElement;
  const moonIcon = document.getElementById("themeToggleMoon");
  const sunIcon = document.getElementById("themeToggleSun");
  const headerIcon = document.getElementsByClassName("headerIcon");
  const logo = document.getElementById("logo");

  moonIcon.style.setProperty("display", "block");
  sunIcon.style.setProperty("display", "none");

  body.style.setProperty("background-image", "url('/images/background.png')");

  for (let i = 0; i < headerIcon.length; i++) {
    headerIcon[i].style.setProperty("color", "#503b21");
  }

  elementRoot.style.setProperty("--darkGradPrimTrans", "rgb(79, 58, 32, 0.75)");
  elementRoot.style.setProperty("--darkGradSecTrans", "rgb(121, 91, 54, 0.75)");
  elementRoot.style.setProperty("--lightGradPrimTrans", "rgb(139, 106, 65, 0.75)");
  elementRoot.style.setProperty("--lightGradSecTrans", "rgb(255, 222, 181, 0.75)");

  elementRoot.style.setProperty("--darkGradPrim", "#4f3a20");
  elementRoot.style.setProperty("--darkGradSec", "#795b36");
  elementRoot.style.setProperty("--lightGradPrim", "#8b6a41");
  elementRoot.style.setProperty("--lightGradSec", "#ffdeb5");

  localStorage.setItem('theme', 'light');

  logo.src = "images/noodleboxLogo.png";
};