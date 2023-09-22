/*se necesita clasificar 10 números enteros positivos 
o negativos que contienen códigos de naves de guerra. Diseño 
un algoritmo que permita recibir dichos 50 números e indicar 
¿Cuál fue el más cercano a cero? (Si el número es negativo se 
debe mostrar el resultado del valor absoluto)*/

function numeroCercanoCero(){
    let numeroCercano = numero[0]

    for (let i = 0; i < numero.length; i++) {
        if (Math.abs(numero[i]) < Math.abs(numeroCercano)) {
            numeroCercano = numero[i]
        }
        
    }
    return numeroCercano
}

const numero = [5, -2, 6, 9, -3, 5, 12, -8, 18, 20]
const encontrarNumero = numeroCercanoCero(numero)

console.log(`El numero cercano a cero es: ${encontrarNumero}`)