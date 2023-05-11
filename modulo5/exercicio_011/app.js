/* ----------------------------------------------------------------------------

Exercício: 011
Enunciado:
    A grelha inicial contém dezasseis imgs sem souce.
    Quando clicamos numa das imgs, vamos apresentar o símbolo X (imagem)
    No clique seguinte, que só pode acontecer numa img que não tenha símbolo,
    vamos apresentar o símbolo 'O'.
---------------------------------------------------------------------------- */

let filled_images = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0]
let symbol = "x";
document.querySelectorAll('[id^="img').forEach(img => {
    img.addEventListener('click', img => {
        let index = img.target.substring(3);
        putsimnol(index);
    })
})

function putsimnol(index){
    if
}
