function associarBotaoInput() {
  const botoes = document.querySelectorAll('.posicao__botoes__file__ajuste button');

  botoes.forEach((botao) => {
      const input = botao.parentElement.querySelector('input[type="file"]');

      botao.addEventListener('click', (event) => {
          event.preventDefault();
          
          input.click();
      });

      input.addEventListener('change', () => {
          if (input.files.length > 0) {
              const existindoConfirmacao = botao.parentElement.querySelector('.confirmacao');
              if (existindoConfirmacao) {
                  existindoConfirmacao.remove();
              }
              
              const confirmacao = document.createElement('span');
              confirmacao.textContent = '✔️'; // Ícone de check (OK)
              confirmacao.style.color = 'green'; // Cor verde para o ícone
              
              botao.classList.add('botao-verde');

              confirmacao.classList.add('confirmacao');
              botao.parentElement.appendChild(confirmacao);
          } else {
              botao.classList.remove('botao-verde');
              const existindoConfirmacao = botao.parentElement.querySelector('.confirmacao');
              if (existindoConfirmacao) {
                  existindoConfirmacao.remove();
              }
          }
      });
  });
}

document.addEventListener('DOMContentLoaded', associarBotaoInput);
