var asterisco = ""; 
var tamanhoStr = 0;
function init(){
    for(var i = 0; i < 10; i++){ 
        asterisco = asterisco + "*";
        document.write(asterisco + "<br>"); 
    }
    tamanhoStr = asterisco.length;
    for(var i = tamanhoStr; i > 0; i--){ 
        document.write(asterisco.substr(0, i) + "<br>"); 
    }
}

init()