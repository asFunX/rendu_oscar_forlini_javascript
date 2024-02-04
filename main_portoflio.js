document.addEventListener("DOMContentLoaded", function () {
  // Nouveau slider avec la classe que je vise
  const swiper = new Swiper(".mon-slider", {
    navigation: {
      nextEl: ".swiper-button-next",
      prevEl: ".swiper-button-prev",
    },
    pagination: {
      el: ".swiper-pagination",
    },
    autoplay: {
      delay: 3000,
    },
  });
});

const lightbox = new SimpleLightbox(".card a");

const options = {
  gutterPixels: 50,
};
const filterizr = new Filterizr(".portfolio-elements", options);

let filtersList = document.querySelectorAll(".filters li");
filtersList.forEach(function (filterItem) {
  filterItem.addEventListener("click", function () {
    document.querySelector(".filters .active").classList.remove("active");
    this.classList.add("active");
  });
});

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
