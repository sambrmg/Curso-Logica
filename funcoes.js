var arr = []

var lista = document.querySelector("#lista")
function addItem(){
    var item = document.querySelector("#item")
    arr.push(item.value)
}

function criarLista(){
    lista.innerHTML = ""
    for(var i=0; i < arr.length; i++){
        var li =  document.createElement('li')
        var textoLi = document.createTextNode(arr[i])
        li.appendChild(textoLi)
        lista.appendChild(li)
    }
}