// zona segura
document.addEventListener("DOMContentLoaded", function(){
    const frutas = ["pomelo", "naranja"];
    const verduras = ["locote"];

    const vero = {
        nombre: "Veronica Belen"
        , apellido: "Vera Irala"
        , edad: null
    };
    const ale = {
        nombre: "Alexis"
        , apellido: "Aguilera"
        , edad: 29
    };
    const george = {
        nombre: "Jorge"
        , apellido: "Acuña"
        , edad: 28
    };

    const personas = [vero, ale];
    console.log(personas);
    personas.push(george);
    console.log(personas);

    // length es el numero de elementos
    // para encontrar un elemento conocido
    // se usa la []
    console.log(frutas);
    console.log(frutas.length);
    console.log(frutas[frutas.length -1]);
    frutas.push("piña");
    console.log(frutas);
    frutas.shift();
    console.log(frutas);
    frutas.pop();
    console.log(frutas);

    console.log(verduras);
    console.log(personas);
});