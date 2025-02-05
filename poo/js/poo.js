document.addEventListener("DOMContentLoaded", function() {
    // zona segura
    const insfran = new Persona("Pedro Luisito"
                        , "Insfran Irala", "M"
                        , "5871189", "1998-04-24");
    const rocio = new Persona("Rocio", "Arnold Céspedes"
                        , "f", "7003468", "2006-11-02");

    //console.log(insfran.pensar());
    console.log(rocio);
    console.log(rocio.pensar());
});

class Persona {

    constructor(nombres, apellidos, sexo, cedula, fechanac) {
        this.nombres = nombres;
        this.apellidos = apellidos;
        //this.sexo = sexo;
        this.cedula = cedula;
        this.fechanac = fechanac;

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
