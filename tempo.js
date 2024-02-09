let segundos = 10; 
    let contagem = document.getElementById('contagem');
    let temporizador;

    function atualizarTemporizador() {
      contagem.innerHTML = segundos;
      if (segundos === 0) {
        alert("Tempo esgotado! Você perdeu.");
      } else {
        segundos--;
        temporizador = setTimeout(atualizarTemporizador, 1000);
      }
    }

    // Inicie o temporizador ao carregar a página
    window.onload = atualizarTemporizador;