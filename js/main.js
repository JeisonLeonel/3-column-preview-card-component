let columnaActiva = 1;

const columna = document.querySelectorAll('.column');

columna.forEach((columna, indice) => {
    columna.addEventListener("click", function(){
        cambiarColumn(indice)
    })
    
})

function cambiarColumn(indice){
    columna[columnaActiva].classList.remove("activa");
    columna[indice].classList.add("activa");
    columnaActiva = indice;
}