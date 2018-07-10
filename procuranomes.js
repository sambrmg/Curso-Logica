var pesquisa = prompt("informe um nome")
var encontrou = false
var nomes = [
    "joao",
    "jose",
    "maria"
]

for(var i = 0; i < nomes.length; i++){
    if(pesquisa.trim() == nomes[i]){
        encontrou = true
        alert( "index: " + i + " Nome: " + nomes[i])
    }
}

if(encontrou == false){
    alert("Não encontrei")
}