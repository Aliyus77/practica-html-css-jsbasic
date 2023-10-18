// MENU < 720

let menu_responsive = document.querySelector(".menu-icon");
menu_responsive.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

let menuToggle = document.querySelector(".contenedor-menu");
menuToggle.onclick = function () {
  navBar = document.querySelector(".navbar");
  navBar.classList.toggle("active");
};

// VALIDACION FORMULARIO

const form = document.getElementById("form");
const nombre = document.getElementById("name");
const parrafo = document.getElementById("message");

function validarFormulario() {
  let warnings = "";
  let valido = true;
  parrafo.innerHTML = "";

  if (nombre.value.length < 4) {
    // warnings += `El nombre debe contener más de 4 carcateres`;
    alert("El nombre debe contener más de 4 caracteres.");
    valido = false;
  }

  if (!valido) {
    parrafo.innerHTML = warnings;
  } else {
    parrafo.innerHTML = "Enviado";
  }
  return valido;
}

form.addEventListener("submit", (e) => {
  if (validarFormulario()) {
    // Si la validación es exitosa, puedes enviar el formulario
    formulario.submit();
  } else {
    e.preventDefault(); // Evita que el formulario se envíe automáticamente
  }
});