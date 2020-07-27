let titulo = document.getElementById("titulo")

let boton= document.getElementById("btn")

let respuesta = document.getElementById("respuesta")

let pregunta = document.getElementById("pregunta")

console.log(titulo);

const cambiar= () =>{
    titulo.innerHTML ="FEA"
    respuesta.innerHTML = pregunta.value

}

boton.addEventListener("click", cambiar)