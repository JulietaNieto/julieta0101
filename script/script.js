let nombre, correo, mensaje;

let formulario = document.getElementById(`form`);

formulario.addEventListener(`submit`, (e) => {
    e.preventDefault();
    leerdatos()
});

function leerdatos() {
    nombre = document.getElementById(`nombre`).value;
    correo = document.getElementById(`correo`).value;
    mensaje = document.getElementById(`textarea`).value;
    validardatos(nombre, correo, mensaje);
    guardarlocalstorage(nombre, correo, mensaje);

};



function validardatos(nombre, correo, mensaje) {
    if (nombre.length == 0 || correo.length == 0 || mensaje.length == 0) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'falta informacion',
            footer: '<a href="">Why do I have this issue?</a>'
          })  
    }

};

function guardarlocalstorage(nombre, correo, mensaje) {
    localStorage.setItem(`nombre`, nombre);
    localStorage.setItem(`correo`, correo);
    localStorage.setItem(`mensaje`, mensaje);
    listardatos(nombre, correo, mensaje);
};
function listardatos() {
    let nombreUsu = localStorage.getItem(`nombre`);
    let correoUsu = localStorage.getItem(`correo`);
    let mensajeUsu = localStorage.getItem(`mensaje`);
};

