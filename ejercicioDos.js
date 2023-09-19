/*PROBLEMA: Obi-Wan Kenobi, necesita clasificar diferentes códigos de
acceso a las naves de guerra los cuáles reposan en la base de datos
central, para ello debe programar una función que permita recibir la
palabra clave de cada nave y separar imprimiendo solo el nombre del
piloto asignado a cada nave.
Tenga en cuenta que el formato de todos los datos es el siguiente:
• ARQ2555: Sara Bel-Sun
• ARQ2556: Nodin Chavdri
• ARQ2557: Finn*/

const codigoAcceso = ["ARQ2555: Sara Bel-Sun", "ARQ2556: Nodin Chavdri","ARQ2557: Finn"]

function nombrePiloto(codigoAcceso){
    codigoAcceso.forEach(function(codigo){
        const partes = codigo.split(": ")
        const codigoNave = partes[0]
        const nombrePiloto = partes[1]
        console.log(`Codigo de nave: ${codigoNave}, Piloto: ${nombrePiloto}`)

    })
}
nombrePiloto(codigoAcceso)