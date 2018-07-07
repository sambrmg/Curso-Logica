
var gasolina = 0;
var alcool = 0;

function verificar(){
    gasolina = parseFloat(document.querySelector("#gasolina").value);
    alcool = parseFloat(document.querySelector("#alcool").value);

    var total = (gasolina * 0.7).toFixed(2)

    if( total >= alcool ){
        document.querySelector("#resultado").value = "alcool: " + total;
    }else{
        document.querySelector("#resultado").value = "gasolina: " + total;
    }
}

