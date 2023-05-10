/* ----------------------------------------------------------------------------

Exercício: 008
Enunciado:
    Existem 5 botões, cada um com uma cor diferente do Bootstrap.
    A ideia é criar o código javascript que permita que o clique em cada
    um dos botões altere o texto acima para a cor de fundo do botão.
---------------------------------------------------------------------------- */

const cores = ['primary', 'info', 'success', 'danger', 'warning'];
document.querySelectorAll('[id^="btn"]').forEach((btn) => {
    btn.addEventListener('click', (btn) => {
        let index = btn.target.id.substring(3, 4) - 1;
        document.querySelector("h3").className = "text-" + cores[index];
    })
})




// --------/---------- 1st try --------/---------- 

// document.getElementById("btn1").addEventListener("click", () =>{
//     document.querySelector("h3").style.color = "#2487B6"
// })

// document.getElementById("btn2").addEventListener("click", () =>{
//     document.querySelector("h3").style.color = "#9933CC"
// })

// document.getElementById("btn3").addEventListener("click", () =>{
//     document.querySelector("h3").style.color = "#659800"
// })

// document.getElementById("btn4").addEventListener("click", () =>{
//     document.querySelector("h3").style.color = "#CC0000"
// })

// document.getElementById("btn5").addEventListener("click", () =>{
//     document.querySelector("h3").style.color = "#D97400"
// })