// var, let y const
// ámbito/contexto - scope

// var
function ejemploVar() {
    if(true) {
        var numero = 10;
    }
    console.log(numero);
}

function ejemploLet() {
    if(true) {
        let numero = 10;
    }
    console.log(numero);
}

function ejemploConst() {
    const z = 30;
    //z = 15;
    console.log(z);

    const array = [1, 2, 3];
    array.push(4);
    console.log(array);
    //array = [];
}

ejemploVar();
//ejemploLet();
ejemploConst();