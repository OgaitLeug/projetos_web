/* ----------------------------------------------------------------------------

Exercício: 006
Enunciado:
    Existem 3 botões no layout. Cada botão está associado a uma área de
    informação. O objetivo é criar a lógica que permite apresentar cada
    uma das áreas de acordo com o botão clicado.
    A área de informação um deve estar visível por padrão.

    NOTA: quando uma área é apresentada, as outras devem ficar escondidas
---------------------------------------------------------------------------- */


//Padrão: Display #INFO 1
hide_all()
document.getElementById("info1").style.display = "block";

//  DISPLAY INFO 1
document.getElementById("tab1").addEventListener( "click", () =>{
    hide_all();
    document.getElementById("info1").style.display = "block";

})

// DISPLAY INFO 2
document.getElementById("tab2").addEventListener( "click", () =>{
    hide_all();
    document.getElementById("info2").style.display = "block";

})

// DISPLAY INFO 3
document.getElementById("tab3").addEventListener( "click", () =>{
    hide_all();
    document.getElementById("info3").style.display = "block";

})

function hide_all(){
    document.querySelectorAll('[id^="info"]').forEach((el) => {
         el.style.display = "none"
    })
}