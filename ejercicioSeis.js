/* Para habilitar la guerra de los clones es necesario 
clasificar la edad de estos, elabore un programa que permita 
recibir 20 edades y 20 códigos diferentes generadas 
aleatoriamente y determine cual de esas edades es la mayor. Si 
se repite la misma edad se debe contar el número de 
repeticiones*/

function clasificarEdad(edades,codigos){
    const edadesContadas = {}
    let mayorEdad = -1
    let repiteEdad = 0

    for(let i = 0; i < edades.length; i++){
        const edad = edades[i]
        const codigo = codigos[i]

        if(!edadesContadas[edad]){
            edadesContadas[edad] = 1
        }else{
        edadesContadas[edad]++
        }
        if(edad > mayorEdad){
            mayorEdad = edad
            repiteEdad = 1
        }else if(edad === mayorEdad){
            repiteEdad++
        }
    }
    return {mayorEdad,repiteEdad,edadesContadas}
}

const edadesAleatorias = [10,25,45,67,30,16,18,23,32,60,30,22,56,46,40,10,2,67,34,23]
const codigosAleatorios = ['cbr','itr','lñp','cbr','poi','qwe','itr','aaa','poi','aaa','cbr','lñp','poi','aaa','1ww','poi','bbb','aaa','3er','ret']

const resultado = clasificarEdad(edadesAleatorias,codigosAleatorios)

console.log(`La mayor edad es ${resultado.mayorEdad}, se repite ${resultado.repiteEdad} veces.`)
console.log(`Conteo de edades:`)
for (const edad in resultado.edadesContadas){
    console.log(`${edad}: ${resultado.edadesContadas[edad]} veces.`)
}