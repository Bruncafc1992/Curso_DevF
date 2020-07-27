// Objetos literales

let persona = {

    nombre: "José Andrés",
    apellido: "Barrios Jerez",
    edad: 28,
    pais: "Costa Rica",

    saludar() {

        console.log("Hola")
    },

    despedir() {

        console.log("ADIOS")

    },

    gritar: function() {

        console.log("ESTOY GRITANDO!!!!!")

    }

}

// console.log(persona);
// console.log(persona.pais);
// console.log(persona.saludar)

persona.saludar();

persona.gritar();