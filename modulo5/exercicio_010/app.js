/* ----------------------------------------------------------------------------

Exercício: 010
Enunciado:
    Existem 4 áreas a cinza.
    Ao clicar numa das áreas a área clicada deve ficar com fundo
    amarelo e as restantes a vermelho.
---------------------------------------------------------------------------- */

const caixas = document.querySelectorAll('[id^="box"]');

caixas.forEach(box => {
    box.addEventListener('click', (box) => {
        // todas a vermelho
        allred();
        // amarelo ao click
        box.target.style.backgroundColor = "yellow";
    })
})

 function allred() {
    caixas.forEach((box) => {
        box.style.backgroundColor = "red";
    })
 }
