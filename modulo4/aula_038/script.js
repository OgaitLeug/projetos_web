/* 
OBJETIVO:
Adicionar 3 eventos click, um para cada elemento dentro do body 
cada um vai apresentar um texto único na consola
e fazer com que sejam independentes uns dos outros.
(Propagation)
*/

let elementos = document.querySelectorAll("section, article div")

elementos.forEach((event) => {
    event.addEventListener('click', (e) => {
        e.stopPropagation()
        console.log(e.target.tagName)
    })
})