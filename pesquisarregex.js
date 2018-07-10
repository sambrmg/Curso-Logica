var nomes =  [ "Guilherme", "Francisco", "João", "Maria", "José" ]
function pesquisar(obj){

    console.clear();
    for( var i = 0 ; i < nomes.length ; i++){
        if(obj.value.trim() != ""){
            var re = new RegExp(obj.value, "i");
            var res = re.exec(nomes[i]);
            if( res != null) {   
                console.log(res.input); 
            }
        }
        
    }
}