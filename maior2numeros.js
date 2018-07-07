
function inserirNumero(qualnumero){

    var numeroInserido = NaN;
    while(isNaN(numeroInserido)){
        numeroInserido = parseFloat( prompt("Informe o " + qualnumero +" número inteiro") );
    }
    return numeroInserido;
    
}


function verificarMaior(n1, n2){
    if(n1 != n2){
        if (n1 > n2){
            alert("O número " + n1 + " é maior que o número " + n2);
        }else{
            alert("O número " + n2 + " é maior que o número " + n1);
        }
    }else{
        alert("Os números são iguais");
    }  
}

var numero1 = inserirNumero("primeiro");
var numero2 = inserirNumero("segundo");
verificarMaior(numero1, numero2);


