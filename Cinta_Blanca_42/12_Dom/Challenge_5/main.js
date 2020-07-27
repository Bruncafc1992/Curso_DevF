let Nombre = document.getElementById("Nombre")
let respuesta1 = document.getElementById("respuesta1")

let Dirección = document.getElementById("Dirección")
let respuesta2 = document.getElementById("respuesta2")


let Teléfono = document.getElementById("Teléfono")
let respuesta3 = document.getElementById("respuesta3")


let Pizza = document.getElementById("Pizza")
let respuesta4 = document.getElementById("respuesta4")

let imgPizza = document.getElementById("pizza1")

let boton = document.getElementById("btn")

let esconder = document.getElementById("esconder")

const Pedir = () =>{

    respuesta1.innerHTML =  Nombre.value
    respuesta2.innerHTML =  Dirección.value
    respuesta3.innerHTML =  Teléfono.value
    // respuesta4.innerHTML =  Pizza.value

    if (Pizza.value === "Con") {

        

        imgPizza.src = "https://as.com/epik/imagenes/2017/10/31/portada/1509469785_213048_1509471547_noticia_normal.jpg"

    } else if (Pizza.value === "Sin"){

        imgPizza.src = "https://image.freepik.com/vector-gratis/pizza-dibujado-mano-ilustracion-doodle_179234-35.jpg"

    } else{

        imgPizza.src = ""


    }

}

boton.addEventListener("click", Pedir)