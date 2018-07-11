var arr = [60, 20, 30, 100, 10, 30] ;
var maior = 0;
for(var i = 0; i < arr.length; i++){
    if(maior < arr[i]){
        maior = arr[i];
    }
}

console.log(maior)