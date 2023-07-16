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