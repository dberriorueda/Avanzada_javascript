/* QUI-GON JINN está encargado de revisar n sables 
de luz y contabilizar la cantidad de energía de sables que tienen 
negativa en Joules.
 
Ejemplo: para la entrada {2,4,-8,5,-6} la cantidad de sables 
defectuosos con energía negativa fue de 2 sables.*/

function cantidadSablesNegativo(energías){
    let cantidadNegativa = 0

    for(let i = 0; i <energías.length; i++){
        if(energías[i] < 0){
            cantidadNegativa++
        }
    }
    return cantidadNegativa
}

const energiaSables = [2,4,-8,5,-6]
const cantidadNegativa = cantidadSablesNegativo(energiaSables)

console.log(`La cantodas de sables defectuosos es de : ${cantidadNegativa}`)