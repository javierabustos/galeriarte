const validateForm = (event) => {
    console.log({ validateForm: event })
    /*event.preventDefault(); //detiene el comportamiento asociado a ese evento
    const nombre = document.getElementById('nombre').value;
    const email = document.getElementById('email').value;
    const tel = document.getElementById('tel').value;
    const direccion = document.getElementById('direccion').value;
    const tipo_solicitud = document.getElementById('tipoSolicitud').value;
    const mensaje = document.getElementById('mensaje').value;
    if (!nombre || !email || !tel || !direccion || !tipo_solicitud || !mensaje) {
        alert('Por favor, complete todos los campos obligatorios.');
        return;
    }*/
};

const asignarComportamiento = (event) => {
    console.log({ asignarComportamiento: event })
    const form = document.getElementById('contactForm');
    form.addEventListener('submit', validateForm);
};

document.addEventListener("DOMContentLoaded", asignarComportamiento);

/*const selectForm = 
if (mensaje.includes('compra')) {
    selectForm.value = 'Compra';
} else if (mensaje.includes('venta')) {
    selectForm.value = 'Venta';
}

// Envío del formulario si todo está bien
this.submit();

document.getElementById('contactForm').addEventListener('submit', function (event) {
    console.log({ submit })

});*/