/*3. PROBLEMA: La luna de Endor pierde temperatura día a día, para ello 
hay que hacer un monitoreo constante, Cree una función de flecha que 
permita calcular la temperatura media de la luna a partir de la 
temperatura máxima y mínima de cada día*/

function calcularTemperaturaMedia(temperaturaMaxima,temperaturaMinima){
    return (temperaturaMaxima + temperaturaMinima) / 2
}

const temperaturaMax = 30
const temperaturaMini = 2
const temperaturaMedia = calcularTemperaturaMedia(temperaturaMax,temperaturaMini)

console.log(`La temperatura media es : ${temperaturaMedia}`)