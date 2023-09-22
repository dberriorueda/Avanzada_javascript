/*Yoda el maestro jedi, necesita asignar a sus 
aprendices Padawans 2 actividades dependiendo de la edad de 
ellos:
• Manejo de la fuerza: Si el aprendiz es menor de 15 años
• Manejo del sable de luz: Si el aprendiz es mayor de 15 años
Inicialmente, se debe programar una función que asocie los datos de: 
{nombre, planeta, edad y estatura} de 1 Padawan a un objeto y una vez 
este objeto sea creado se debe llamar a una función secundaria que 
clasifique y muestre en consola la actividad asignada al Padawan */

function crearPadawan(nombre,planeta,edad,estatura,clasificarpadawan){
    setTimeout(function(){
        let padawan = {
            nombreEstudiante:nombre,
            planetaEstudiante:planeta,
            edadestudiante:edad,
            estaturaEstudiante:estatura
        }
        clasificarpadawan(padawan)
    },2000)
}
crearPadawan("Grogu", "yoda",100,"40 cms", function(padawan){
    if(padawan.edadestudiante < 15){
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadestudiante} años, vas a la clase manejo de la fuerza`)

    }else{
        console.log(`${padawan.nombreEstudiante} tienes ${padawan.edadestudiante} años, vas a la clase del sable de luz`)
    }
})