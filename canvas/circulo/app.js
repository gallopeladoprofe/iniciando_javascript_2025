document.addEventListener('DOMContentLoaded', function() {
    const circulo_elemento = document.getElementById("myCanvas");
    const contexto = circulo_elemento.getContext("2d");
    contexto.beginPath();
    contexto.arc(95,50,40,0,2*Math.PI);
    contexto.stroke();

    circulo_elemento.addEventListener('click', function() {
        saludar();
    });
});


function saludar() {
    alert("Hiciste click");
}