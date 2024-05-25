// ventana emergente para San Andres
// Obtener el botón de solicitar información y la ventana emergente
var solicitarBtn = document.getElementById("solicitar-btn");
var popupForm = document.getElementById("popup-form");

// Función para abrir la ventana emergente
solicitarBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});

// Obtener el botón de cerrar de la ventana emergente
var closeBtn = document.querySelector(".close-btn");

// Función para cerrar la ventana emergente
closeBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
});

// Cerrar la ventana emergente si el usuario hace clic fuera de ella
window.addEventListener("click", function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
});


// ventana emergente para cartagena
// Obtener el botón de solicitar información y la ventana emergente
var solicitarBtn = document.getElementById("btn-cartagena");
var popupForm = document.getElementById("popupcartagena");

// Función para abrir la ventana emergente
solicitarBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});

// Obtener el botón de cerrar de la ventana emergente
var closeBtn = document.querySelector(".btn-cerrarcarta");

// Función para cerrar la ventana emergente
closeBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
});

// Cerrar la ventana emergente si el usuario hace clic fuera de ella
window.addEventListener("click", function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
});

// ventana emergente para medellin
// Obtener el botón de solicitar información y la ventana emergente
var solicitarBtn = document.getElementById("btn-medellin");
var popupForm = document.getElementById("popupmedellin");

// Función para abrir la ventana emergente
solicitarBtn.addEventListener("click", function() {
    popupForm.style.display = "block";
});

// Obtener el botón de cerrar de la ventana emergente
var closeBtn = document.querySelector(".btn-cerrarmede");

// Función para cerrar la ventana emergente
closeBtn.addEventListener("click", function() {
    popupForm.style.display = "none";
});

// Cerrar la ventana emergente si el usuario hace clic fuera de ella
window.addEventListener("click", function(event) {
    if (event.target == popupForm) {
        popupForm.style.display = "none";
    }
});

