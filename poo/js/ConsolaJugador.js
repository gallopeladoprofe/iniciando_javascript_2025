class ConsolaJugador {
    constructor(armas, vida) {
        this.armas = armas;
        this.vida = vida;
    }
}

class Arma {
    constructor(modelo, serie, cantidadBalas) {
        this.modelo = modelo;
        this.serie = serie;
        this.cantidadBalas = cantidadBalas;
    }
}

/*
const magnum47 = new Arma("Magnun47", 636365, 7);
const ak47 = new Arma("ak47", 555555, 37);

const lista_armas_jugador1 = [magnum47, ak47];
const jugador1 = new ConsolaJugador(lista_armas_jugador1, 100);
*/

export {ConsolaJugador, Arma};