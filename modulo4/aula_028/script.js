/*
document.getElementsByClassName()
document.getElementsByName()
document.getElementsByTagName()
*/




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

let e = document.getElementsByClassName("outra-noticia")

e[0].innetText = "Nova noticia"