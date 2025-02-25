function nuevoTitulo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;

    if (texto.trim() !== "") {
        contenido.innerHTML += '<h1>' + texto + '</h1>';
    } else {
        alert("Por favor, escribe un título antes de agregarlo.");
    }
}

function nuevoParrafo() {
    var contenido = document.getElementById('contenido');
    var texto = document.getElementById("texto").value;

    if (texto.trim() !== "") {
        contenido.innerHTML += '<p>' + texto + '</p>';
    } else {
        alert("Por favor, escribe un párrafo antes de agregarlo.");
    }
}

function nuevoEnlace() {
    var contenido = document.getElementById('contenido');
    var url = prompt("Ingrese la URL del enlace:");
    var texto = prompt("Ingrese el texto del enlace:");

    if (url && texto) {
        contenido.innerHTML += '<a href="' + url + '" target="_blank">' + texto + '</a><br>';
    } else {
        alert("Debe ingresar la URL y el texto para crear el enlace.");
    }
}

function imprimir(){
    var divContents = document.getElementById("contenido").innerHTML;
    var a = window.open('', '', 'height=500, width=500');
    a.document.write('<html>');
    a.document.write('<link rel="stylesheet" href="css/bootstrap.min.css" type="text/css" />');
    a.document.write('<body > <h1>Resultado</h1> <br>');
    a.document.write(divContents);
    a.document.write('</body></html>');
    a.document.close();
    a.print();
}
