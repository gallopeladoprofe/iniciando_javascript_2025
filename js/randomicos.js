let respuesta = prompt("¿Desea ser generar números aleatorios?");
while(respuesta === "1") {
    console.log(Math.random());
    respuesta = prompt("¿Desea ser generar números aleatorios?");
}