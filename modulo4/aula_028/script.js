/*
document.getElementsByClassName()

document.getElementsByName()

document.getElementsByTagName()
*/


// Exemplos de cada um:
//      |
//      |
//      V


// *** ( exemplo de identificaçao por classe com 1length) ***
// let e = document.getElementsByClassName("texto-titulo")
// console.log(e)


// *** (identificação por length com 3length) *** 
// let e = document.getElementsByClassName("outra-noticia")
// console.log(e)

// console.log(e[0])
// console.log(e[1])
// console.log(e[2])


// *** (Mudar o texto de um elemento identificado por class) *** 
// let e = document.getElementsByClassName("outra-noticia")

// e[2].innerText = "Nova noticia" //mudança para nova noticia


// *** (Adicionar valor/preenchimento automatico ao login..) ***
// let e = document.getElementsByName("text_usuario")
// e[0].value = "Joao"


let e = document.getElementsByTagName("div")
console.log(e)