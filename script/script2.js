let propietario, modelo, placa, tipo, fecha, hora, cantidad 

let formulario = document.getElementById(`form`);

formulario.addEventListener(`submit`, (e) => {
    e.preventDefault();
    leerdatos()
});

function leerdatos() {
    propietario = document.getElementById(`propietario`).value;
    modelo = document.getElementById(`modelo`).value;
    placa = document.getElementById(`placa`).value;
   tipo = document.getElementById(`tipo`).value;
    fecha= document.getElementById(`fecha`).value;
    hora= document.getElementById(`hora`).value;
    cantidad= document.getElementById(`cantidad`).value;
    validardatos(propietario, modelo, placa, tipo, fecha, hora, cantidad );
    guardarlocalstorage(propietario, modelo, placa, tipo, fecha, hora, cantidad );

};



function validardatos(propietario, modelo, placa, tipo, fecha, hora, cantidad ) {
    if (propietario.length == 0 || modelo.length == 0 || placa.length == 0 || tipo.length == 0 ||  
         || fecha.length == 0 ||  hora.length == 0 || cantidad.length == 0 ||) {
         Swal.fire({
            icon: 'error',
            title: 'Oops...',
            text: 'falta informacion',
            footer: '<a href="">Why do I have this issue?</a>'
          })  
    }

};

function guardarlocalstorage(propietario, modelo, placa, tipo, fecha, hora, cantidad ) {
    localStorage.setItem(`propietario`, propietario);
    localStorage.setItem(`modelo`, modelo);
    localStorage.setItem(`placa`, placa);
    localStorage.setItem(`tipo`, tipo);
    localStorage.setItem(`fecha`, fecha);
    localStorage.setItem(`hora`, hora);
    localStorage.setItem(`cantidad`, cantidad);
    listardatos(propietario, modelo, placa, tipo, fecha, hora, cantidad);
};
function listardatos(propietario, modelo, placa, tipo, fecha, hora, cantidad) {
    let propietarioVe = localStorage.getItem(`propietario`);
    let modelove = localStorage.getItem(`modelo`);
    let placaVe = localStorage.getItem(`placa`);
    let tipoVe = localStorage.getItem(`tipo`);
    let fechaVe = localStorage.getItem(`fecha`);
    let horaVe = localStorage.getItem(`hora`);
    let cantidadVe= localStorage.getItem(`cantidad`);
};

