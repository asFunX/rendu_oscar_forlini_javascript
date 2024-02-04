const nom = document.getElementById("nom");
const prenom = document.getElementById("prenom");
const email = document.getElementById("email");
const selection = document.getElementById("selection");
const genreOptions = document.querySelectorAll('input[name="genre"]');

const nomError = document.getElementById("nom-error");
const prenomError = document.getElementById("prenom-error");
const emailError = document.getElementById("email-error");
const selectionError = document.getElementById("selection-error");

document.getElementById("searchForm").addEventListener("submit", onSubmit);

function validateEmail(email) {
  const re =
    /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return re.test(email.toLowerCase());
}

function onSubmit(event) {
  let isValid = true;
  let genreSelected = false;

  nom.classList.remove("error");
  prenom.classList.remove("error");
  email.classList.remove("error");
  selection.classList.remove("error");
  nomError.style.display = "none";
  prenomError.style.display = "none";
  emailError.style.display = "none";
  selectionError.style.display = "none";

  if (nom.value.trim() === "") {
    nom.classList.add("error");
    nomError.style.display = "block";
    isValid = false;
  }

  if (prenom.value.trim() === "") {
    prenom.classList.add("error");
    prenomError.style.display = "block";
    isValid = false;
  }

  if (!validateEmail(email.value.trim())) {
    email.classList.add("error");
    emailError.textContent = "Adresse e-mail invalide";
    emailError.style.display = "block";
    isValid = false;
  }

  genreOptions.forEach(function (option) {
    if (option.checked) {
      genreSelected = true;
    }
  });
  if (!genreSelected) {
    // Afficher un message d'erreur si nécessaire
    isValid = false;
  }

  if (selection.value.trim() === "") {
    selection.classList.add("error");
    selectionError.style.display = "block";
    isValid = false;
  }

  if (!isValid) {
    event.preventDefault();
  }
}

