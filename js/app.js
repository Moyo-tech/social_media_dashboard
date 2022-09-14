const input = document.querySelector(".theme-switch input");
const modetext = document.querySelector(".change-mode-text");
input.addEventListener("change", (e) => {
  if (e.target.checked) {
    document.body.setAttribute("data-theme", "dark");
    modetext.textContent = "Dark ";
  } else {
    document.body.setAttribute("data-theme", "light");
    modetext.textContent = "Light ";
  }
});
