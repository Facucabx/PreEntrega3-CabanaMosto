// BUSCADOR DE SERVICIOS 
function buscarServicio() {
    var input = document.querySelector('.buscar');
    var servicios = document.querySelectorAll('.card-servicios');

    var searchTerm = input.value.toLowerCase();

    servicios.forEach(function (servicio) {
        var nombre = servicio.querySelector('h3').textContent.toLowerCase();
        var profesion = servicio.querySelector('p').textContent.toLowerCase();

        if (nombre.includes(searchTerm) || profesion.includes(searchTerm)) {
            servicio.style.display = 'block';
        } else {
            servicio.style.display = 'none';
        }
    });
}

// BUSCADOR DE EVENTOS
function buscarEvento() {
    var input = document.querySelector('.buscar');
    var eventos = document.querySelectorAll('.card-evento');
    var sinResultados = document.getElementById('sin-resultados');

    var searchTerm = input.value.toLowerCase();
    var resultadosEncontrados = false;

    eventos.forEach(function (evento) {
        var titulo = evento.querySelector('h3').textContent.toLowerCase();
        var lugar = evento.querySelector('p').textContent.toLowerCase();

        if (titulo.includes(searchTerm) || lugar.includes(searchTerm)) {
            evento.style.display = 'block';
            resultadosEncontrados = true;
        } else {
            evento.style.display = 'none';
        }
    });

    if (resultadosEncontrados) {
        sinResultados.style.display = 'none';
    } else {
        sinResultados.style.display = 'block';
    }
}


// index 

function buscarServicio() {
    var input = document.querySelector('.buscar');
    var servicios = document.querySelectorAll('.card-servicios');
    var eventos = document.querySelectorAll('.card-evento');

    var searchTerm = input.value.toLowerCase();

    servicios.forEach(function (servicio) {
        var nombre = servicio.querySelector('h3').textContent.toLowerCase();
        var profesion = servicio.querySelector('p').textContent.toLowerCase();

        if (nombre.includes(searchTerm) || profesion.includes(searchTerm)) {
            servicio.style.display = 'block';
        } else {
            servicio.style.display = 'none';
        }
    });

    eventos.forEach(function (evento) {
        var nombre = evento.querySelector('h3').textContent.toLowerCase();
        var lugar = evento.querySelector('p').textContent.toLowerCase();

        if (nombre.includes(searchTerm) || lugar.includes(searchTerm)) {
            evento.style.display = 'block';
        } else {
            evento.style.display = 'none';
        }
    });
}