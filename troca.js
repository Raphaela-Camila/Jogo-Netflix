function TrocaPalavra(){
    palavraDigitada = document.getElementById("palavra").value

    document.getElementById("palavra_1").innerHTML=palavraDigitada
    document.getElementById("palavra_2").innerHTML=palavraDigitada
    document.getElementById("palavra_3").innerHTML=palavraDigitada
    document.getElementById("palavra_4").innerHTML=palavraDigitada
    document.getElementById("palavra_5").innerHTML=palavraDigitada
}

function TrocaPalavra2(){
    var palavra = document.getElementsByTagName("strong")
    palavraDigitada = document.getElementById("palavra").value
//     palavra[0].innerHTML=palavraDigitada
//     document.getElementsByTagName("strong")[2].innerHTML= palavraDigitada
}

console.log(palavra.length)

for(i=0;i<=palavra.length;i++){
    palavra[i].innerHTML = palavraDigitada
}