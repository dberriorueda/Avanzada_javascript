/*Watto paga a su personal de ventas un salario de 
3500000 mensuales, más una comisión de 1500000 por cada 
licencia de software vendida menos el 5% de deducciones por 
impuestos sobre el total devengadp. Codifica un programa que 
calcule e imprima el salario mensual de un vendedor dado;*/

function calcularSalario(ventasLicencia){
    const salarioBase = 3500000
    const comisionVenta = 1500000
    const deduciones = 0.05

    const comisiónTotal = comisionVenta * ventasLicencia
    const salarioComicones = salarioBase + comisiónTotal
    const salarioFinal = salarioComicones * (1 - deduciones)

    return salarioFinal
}
const ventasLicencia = 5
const salarioMensual = calcularSalario(ventasLicencia)

console.log(`El salario mensual del vendedor es: ${salarioMensual}`)