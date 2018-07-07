
var peso = parseFloat ( prompt ("Informe o seu peso"))
var altura = parseFloat ( prompt ("Informe o seu altura em metros exemplo: 1.90"))


var imc = (peso / (altura * altura)).toFixed(2)

if(imc <= 18.5 ){
    alert("seu imc: " + imc + " esta indicando que voce esta abaixo do peso")
}

if( imc >= 18.5 && imc <= 24.9 ){
    alert("seu imc: " + imc + " esta indicando que voce esta o peso normal")
}