const nav = document.getElementById("nav-menu");

document.getElementById("burger").addEventListener("click", function () {
  if (nav.classList.contains("extand")) {
    nav.classList.remove("extand");
  } else {
    nav.classList.add("extand");
  }
});

const toggle = document.getElementById("darkModeToggle");

if (toggle) {
  toggle.addEventListener("change", function (event) {
    if (event.target.checked) {
      document.body.classList.add("dark-mode");
    } else {
      document.body.classList.remove("dark-mode");
    }
  });
}
