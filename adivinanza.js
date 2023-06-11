const { keyIn } = require("readline-sync")

const generarNumeroAleatorio = () => {
    return Math.floor(Math.random() * 100) + 1
}

const verificarAdivinanza = (numeroSecreto, numeroAdivinado) => {
    if (numeroAdivinado == numeroSecreto){
        console.log("Felicidades, adivinaste!")
    }
    else if (numeroAdivinado > numeroSecreto){
        console.log('El nro secreto es menor. Sigue intentando!')
    }
    else{
        console.log('El nro secreto es mayor. Sigue intentando!')
    }
}
module.exports = {
    generarNumeroAleatorio,
    verificarAdivinanza
}