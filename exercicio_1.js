var idade = parseInt( prompt("Informe sua idade") );
var tempo = parseInt( prompt("Informe os anos de contribuição") );

if( idade >= 65) {
    alert("Você pode aposentar por idade");
}else{
    alert("Você não pode aposentar por idade");
}

if( tempo >= 30) {
    alert("Você pode aposentar por tempo de contribuição");
}else{
    alert("Você não pode aposentar por tempo de contribuição");
}

if( tempo >= 25 && idade >= 60 ) {
    alert("Você pode aposentar por ter atingido 25 anos de contribuição e 60 de idade");
}else{
    alert("Você não pode aposentar por ter atingido 25 anos de contribuição e 60 de idade");
}

