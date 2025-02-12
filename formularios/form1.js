document.addEventListener('DOMContentLoaded', function(){
    const txtnombres = document.getElementById('txtnombres');
    const txtapellidos = document.getElementById('txtapellidos');
    const btnEnviar = document.getElementById('btnEnviar');

    btnEnviar.addEventListener('click', function() {
        const nombres = txtnombres.value;
        const apellidos = txtapellidos.value;


        if(!nombres.trim()) {
            alert('Falta cargar nombre');
            return;
        }
        if(!apellidos.trim()) {
            alert('falta cargar apellidos');
            return;
        }

        alert('Todo correcto, OK');
    });
});