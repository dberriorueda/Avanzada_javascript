/*Para descubrir la ubicación de un listado con los 
últimos guerreros jedi de la galaxia se debe recibir un listado de 
15 mapas los cuales tienen la siguiente información 
{nombrePlaneta, latitud, longitud, nivel de oxígeno en el 
planeta, volumen total del agua del planeta}. Diseñe una 
solución para:
• Sumar la cantidad total de agua de los 15 planetas
• Sumar y multiplicar por 100 el total de oxigeno de los 15 planetas
• Encontrar si alguno de los 15 planetas tiene un nivel de oxigeno 
negativo y de ser así mostrar la información general de este
• Encontrar si alguno de los 15 planetas no tiene agua y mostrar la 
información general de este*/

const mapasPlanetas = [
    {nombrePlaneta: "Mercurio", latitud: 40, longitud: 35, nivelOxigeno: 3, volumenAgua: 100},
    {nombrePlaneta: "Venus", latitud: -23, longitud: 12, nivelOxigeno:0.3, volumenAgua:1200},
    {nombrePlaneta: "Marte", latitud: 34, longitud: 32, nivelOxigeno:0.8, volumenAgua:2000},
    {nombrePlaneta: "Jupiter", latitud: 56, longitud: 17, nivelOxigeno:0.9, volumenAgua:2300},
    {nombrePlaneta: "Urano", latitud: 31, longitud: 35, nivelOxigeno:0.7, volumenAgua:1250},
    {nombrePlaneta: "Neptuno", latitud: -11, longitud: 46, nivelOxigeno:0.2, volumenAgua:100},
    {nombrePlaneta: "Saturno", latitud: 29, longitud: 13, nivelOxigeno:4, volumenAgua:900},
    {nombrePlaneta: "Planeta rojo", latitud: 21, longitud: 41, nivelOxigeno:0.8, volumenAgua:800},
    {nombrePlaneta: "Venus", latitud: 23, longitud: 12, nivelOxigeno:0.3, volumenAgua:1200},
    {nombrePlaneta: "Kepler", latitud: 64, longitud: 40, nivelOxigeno:11, volumenAgua:3000},
    {nombrePlaneta: "Osiris", latitud: 50, longitud: 16, nivelOxigeno:0.8, volumenAgua:3500},
    {nombrePlaneta: "cancri", latitud: 55, longitud: 13, nivelOxigeno:12, volumenAgua:1200},
    {nombrePlaneta: "Ogle", latitud: 60, longitud: 0.7, nivelOxigeno:17, volumenAgua:500},
    {nombrePlaneta: "Wasp", latitud: -23, longitud: 12, nivelOxigeno:0.3, volumenAgua:0},
    {nombrePlaneta: "Gliese", latitud: 29, longitud: 0.5, nivelOxigeno:10, volumenAgua:400},
]

function realizarOperacion(mapasPlanetas){
    let totalAgua = 0
    let totalOxigeno = 0
    let planetaOxigenoNegativo = null
    let planetaSinAgua = null

    mapasPlanetas.forEach(planeta => {
        totalAgua += planeta.volumenAgua
        totalOxigeno += planeta.nivelOxigeno

        if(planeta.nivelOxigeno < 0){
            planetaOxigenoNegativo = planeta
        }
        if(planeta.volumenAgua === 0){
            planetaSinAgua = planeta
        }
    });
    totalOxigeno *= 100
    return {totalAgua, totalOxigeno, planetaOxigenoNegativo, planetaSinAgua}
}

const resultado = realizarOperacion(mapasPlanetas)

console.log(`Total de agua de los 15 planetas: ${resultado.totalAgua}`)
console.log(`Total oxigeno multiplicado por 100: ${resultado.totalOxigeno}`)

if(resultado.planetaOxigenoNegativo){
    console.log(`Planeta con oxigeno negativo: ${resultado.planetaOxigenoNegativo.nombrePlaneta}`)
    console.log(resultado.planetaOxigenoNegativo)
}
if(resultado.planetaSinAgua){
    console.log(`Planeta sin agua: ${resultado.planetaSinAgua.nombrePlaneta}`)
    console.log(resultado.planetaSinAgua)
}