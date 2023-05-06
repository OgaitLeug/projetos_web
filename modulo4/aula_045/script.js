// // este código vai ser executado antes dos elementos do body existire,

// document.addEventListener('readystatechange', (event) =>{
//     if(event.target.readyState === 'complete'){ // complete ou interactive funcionam os 2 mas sao diferentes


//         document.querySelector("button").addEventListener('click', () => {
//     document.querySelector('h1').innerText = "Texto do título alterado"
// })


//     }
// })

document.addEventListener('DOMContentLoaded', () =>{
    document.querySelector("button").addEventListener('click', () => {
        document.querySelector('h1').innerText = "Texto do título alterado"
    })
})