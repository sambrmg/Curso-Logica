
var p1 = parseInt( prompt("Informe a idade da primeira pessoa") );
var p2 = parseInt( prompt("Informe a idade da segunda pessoa") );
var p3 = parseInt( prompt("Informe a idade da terceira pessoa") );

function soma(pes1, pes2, pes3){
    return pes1 + pes2 + pes3;
}

function media(total){
    return total / 3;
}

var total = soma(p1, p2, p3);

alert( media(total) );