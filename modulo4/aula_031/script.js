// APLICAR ESTILOS INLINE COM JAVASCRIPT

// document.querySelector("h1").style.color = "red"

// let el = document.querySelector("h1")
// el.style.color = "red" // <-- aceita tudo igual ao css.. rgb hexadecimal etc..

// el.style.backgroundColor = "yellow" // <-- nota que em vez de "background-color" usamos "backgroundColor" em javascript .. igual para tudo o resto

let el = document.querySelector("p")

console.log(el.style.backgroundColor)   // <-- saber qual a propriedade dos atributos , só funciona inline ...
console.log(el.style.color)  // <--  aqui vimos que nao funcionou, nao detetou o cinzento declarado em css..

// Solução para o exemplo anterior do color:
const estilos = window.getComputedStyle(el)
console.log(estilos.getPropertyValue('color'))

console.log(estilos.getPropertyValue('font-size')) // <-- resulta com propriedades não declaradas mas também com propriedades padrão
