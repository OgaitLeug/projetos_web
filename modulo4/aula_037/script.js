/* 
OBJETIVO:
Ao clicar no botão, alterar a cor de fundo da caixa para aquamarine,
apresentar o texto 'clique' na consola e
remover o evento click do botão
*/

let container = document.querySelector('.caixa')

let botao = document.querySelector("button")

botao.addEventListener('click',function executar() {
   container.classList.toggle('cor-fundo-caixa')
   console.log('clique')
   botao.removeEventListener('click', executar) 
    
})
