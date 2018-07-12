var ladoA = 110;
var ladoB = 10;
var base = 110;

if(ladoA == ladoB && ladoB == base){
    alert('É um triangulo equilátero')
}else{
    if( ladoA == ladoB && ladoB != base ){
        alert('É um triangulo isósceles')
    }else{
        alert('É um triangulo escaleno')
    }
}

