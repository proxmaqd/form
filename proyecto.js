function mostrarnombrecompleto() {
    let primer_nombre = document.getElementById('first_name').value;
    let segundo_nombre = document.getElementById('second_name').value;
    let primer_apellido = document.getElementById('first_A').value;
    let segundo_apellido = document.getElementById('second_A').value;

    let nombre_completo = primer_nombre + " " + segundo_nombre + " " + primer_apellido + " " + segundo_apellido;

    document.getElementById('resultadonombre').value = nombre_completo;
}

function mostrarultimodigito() {
    let dni = document.getElementById('dni').value;
    let ultimodigito = dni[dni.length - 1];
    document.getElementById('resultadodni').value = ultimodigito;
}

function mostraredad() {
    let fecha_nacimiento = document.getElementById('fecha_nacimiento').value;
    const fechaActual = new Date();
    const nacimiento = new Date(fecha_nacimiento);
    let edad = fechaActual.getFullYear() - nacimiento.getFullYear();
    const mes = fechaActual.getMonth() - nacimiento.getMonth();
    const dia = fechaActual.getDate() - nacimiento.getDate();

    if (mes < 0 || (mes === 0 && dia < 0)) {
        edad--;
    }
    document.getElementById('resultadoedad').value = edad;
}
