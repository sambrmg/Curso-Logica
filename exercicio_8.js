var lista = []
var loop = true

while( loop ){
    var descricao = prompt('Informe uma descricao')
    if(descricao != null){
        lista.push({ 
            descricao: descricao,
            concluido: false
         });
    }else{
        loop = false
        listar()
    }
    
}
function apagarConteudo(){
    var ul = document.querySelector('#tarefas');
    ul.innerHTML = "";
}
function pesquisarParaConcluir(descricao){
    for(var i = 0; i < lista.length; i++){
       if(descricao == lista[i].descricao){
           if(lista[i].concluido){
            lista[i].concluido = false
           }else{
            lista[i].concluido = true
           }
           
       }
       
    }
    listar()
}
function listar(){
    apagarConteudo()

    var ul = document.querySelector('#tarefas');
    for(var i = 0; i < lista.length; i++){
        var simnao = lista[i].concluido ? 'concluido' : '';
        var check = lista[i].concluido ? 'checked' : '';
        var valor = "'"+lista[i].descricao+"'";
        ul.innerHTML = ul.innerHTML + '<li> <input type="checkbox" onclick="pesquisarParaConcluir('+valor+')" '+check+' > <span class="'+simnao+'">' + lista[i].descricao + ' </span></li>';
        
    }
} 



 console.log(lista)