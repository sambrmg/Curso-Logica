var lista = []
var loop = true

function adicionar(){
    var tarefa = document.querySelector('#tarefa_input');
    var concluido = document.querySelector('#concluido_input');
    lista.push({ 
        id: lista.length,
        descricao: tarefa.value,
        concluido: concluido.checked,
        dataCriacao: new Date(),
        dataConclusao: concluido.checked ? new Date() : null 
    });

    listar()
}

// while( loop ){
//     var descricao = prompt('Informe uma descricao')
//     if(descricao != null){
//         lista.push({ 
//             id: lista.length,
//             descricao: descricao,
//             concluido: false,
//             dataCriacao: new Date(),
//             dataConclusao: null
//          });
//     }else{
//         loop = false
//         listar()
//     }
    
// }
function apagarConteudo(){
    var ul = document.querySelector('#tarefas');
    ul.innerHTML = "";
}
function pesquisarParaConcluir(id){
    for(var i = 0; i < lista.length; i++){
       if(id == lista[i].id){
           if(lista[i].concluido){
            lista[i].concluido = false
        }else{
            lista[i].dataConclusao = new Date()
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
        ul.innerHTML = ul.innerHTML + '<li> <input type="checkbox" onclick="pesquisarParaConcluir('+lista[i].id+')" '+check+' > <span class="'+simnao+'">' + lista[i].descricao + ' </span></li>';
        
    }
} 



 console.log(lista)