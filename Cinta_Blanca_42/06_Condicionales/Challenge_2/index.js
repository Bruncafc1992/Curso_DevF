var jugador_1 = prompt ("Jugador 1, ingrese valor")

var jugador_2 = prompt ("Jugador 2, ingrese valor")

if (jugador_1 === jugador_2){

    console.log("Empate")
}  

// JUGADOR 1 GANANDO
else if (jugador_1 === "papel" && jugador_2 ==="piedra") {

console.log("Jugador 1 Gana")

}

else if (jugador_1 === "tijera" && jugador_2 ==="papel"){

    console.log("Jugador 1 Gana")

}

else if (jugador_1 === "piedra" && jugador_2 ==="tijera"){

    console.log("Jugador 1 Gana") 

}

// JUGADOR 2 GANANDO

else if (jugador_2 === "papel" && jugador_1 ==="piedra") {

    console.log("Jugador 2 Gana")
}
    
else if (jugador_2 === "tijera" && jugador_1 ==="papel"){
    
        console.log("Jugador 2 Gana")
    
}
    
else if (jugador_2 === "piedra" && jugador_1 ==="tijera"){
    
        console.log("Jugador 2 Gana") 
    
}

else {

    console.error("Ingrese solamente: piedra, papel o tijera")

}