// EVENT HANDLERS

function funcao(){
    console.log('clique2')
}

function alterar_texto(e){
    document.querySelector("h1").textContent = "Titulo hackeado com script"
    console.log(e.target)
}