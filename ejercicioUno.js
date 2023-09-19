/*PROBLEMA: Yoda el maestro jedi, necesita enseñar a sus aprendices 
Padawan a calcular la distancia a la que cualquiera de los planetas de la 
ruta N-14 pertenecientes a la ruta comercial de la federación 
intergaláctica, se encuentra del planeta NABOO. 
Para calcular dicha distancia se debe:
• Recibir las coordenadas X,Y del planeta en UA
• Establecer la distancia como:*/

function calcularDistancia(coordenadaUnoX,coordenadaUnoY,coordenadaDosX,coordenadaDosY){
    const distancia = Math.sqrt(Math.pow(coordenadaDosX - coordenadaUnoX,2) + Math.pow(coordenadaDosY-coordenadaUnoY, 2))
    return distancia
}

const NABOOx = 8
const NABOOy = 77

const otroPlanetaX = 12
const otroPlanetaY = 5

const distanciaPlanetas = calcularDistancia(NABOOx, NABOOy,otroPlanetaX,otroPlanetaY)

console.log(`La distancia entre el planeta NABOO y el otro planeta es: ${distanciaPlanetas}`)