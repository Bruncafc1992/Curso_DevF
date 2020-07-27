// console.log(3>4)

// if (3===4) {

//   console.log("Es verdad PAPI")
// } else {
//  console.log("Esta mamando");
// }   


var pregunta = prompt ("Quieres saber, si un número es par o impar?")

var numero= Number(pregunta)

if(numero % 2 === 0)
{
    console.log(numero + " es par")
}
else if( numero % 2 === 1){
    console.log(numero + " es impar")
}
else{
    console.log("ERROR")
}