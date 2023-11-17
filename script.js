var botaoIniciar
document.getElementById("botaoIniciar").addEventListener("click", function() {
   "Iniciar Jogo"
     var nomeDoJogador = prompt('Digite seu nome:')
     alert(`Olá, ${nomeDoJogador}! Bem vindo ao Secret Number. Pressione ok para continuar.`);  
  
    var contagem = 10
    var numeroSecreto = parseInt(Math.random() * 1001) + 1;
    var acertou = false
    while(contagem > 0 && !acertou) {
    var chute = prompt('Digite qualquer número entre 1 e 1000.')
    contagem--
  
    if (chute == numeroSecreto) {
    alert(`Você acertou! Foram ${10 - contagem} tentativas.`)
    break;
  } 
    else if (chute > numeroSecreto) {
    alert(`Errado... o número secreto é menor. Restam ${contagem} tentativas.`)
    
   } 
    else if (chute < numeroSecreto) {
    alert(`Errado... o número secreto é maior. Restam ${contagem} tentativas.`) 
   }
    if (contagem == 0){ 
    alert("Suas tentativas acabaram e você perdeu. O número secreto era " + numeroSecreto + '.')
    
 }  
}
})  