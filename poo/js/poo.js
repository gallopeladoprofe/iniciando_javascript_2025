import { Arma, ConsolaJugador } from './ConsolaJugador.js';

document.addEventListener("DOMContentLoaded", function() {
    // zona segura
    const insfran = new Persona("Pedro Luisito"
                        , "Insfran Irala", "M"
                        , "5871189", "1998-04-24");
    const rocio = new Persona("Rocio", "Arnold Céspedes"
                        , "F", "7003468", "2006-11-02");

    //console.log(insfran.pensar());
    console.log(rocio);
    console.log(rocio.pensar());


    const magnum47 = new Arma("Magnun47", 636365, 7);
    const ak47 = new Arma("ak47", 555555, 37);

    const lista_armas_jugador1 = [magnum47, ak47];
    const jugador1 = new ConsolaJugador(lista_armas_jugador1, 100);
    console.log(jugador1);
});

class Persona {

    constructor(nombres, apellidos, sexo, cedula, fechanac, ciudad) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        //this.sexo = sexo;
        this.cedula = cedula;
        this.fechanac = fechanac;
        this.ciudad = ciudad;

        /* if(sexo === "F") {
            this.sexo = "Femenino";
        } else if(sexo === "M") {
            this.sexo = "Masculino";
        } else if (sexo === "I") {
            this.sexo = "Indistinto";
        } */
       switch(sexo) {
            case "F":
                this.sexo = "Femenino";
                break;
            case "M":
                this.sexo = "Masculino";
                break;
            case "I":
                this.sexo = "Indistinto";
                break;
            default:
                //console.error("Metiste mal el sexo");
                throw new Error("Metiste mal el sexo");
       }

    }

    pensar() {
        return `${this.nombres} ${this.apellidos} está pensando!`;
    }

    caminar() {

    }

}

class Heroe {
    constructor(tipoDeAtaque, atributoPrincipal, habilidades, ataque) {
        this.atributoPrincipal = atributoPrincipal;
        this.tipoDeAtaque = tipoDeAtaque;
        this.habilidades = habilidades;
        this.ataque = ataque;
    }
}

class CrystalMaiden {}
