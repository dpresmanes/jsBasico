var estudiantes = ["maria", "sergio","rosa","china"],

function saludarEstudiantes(estudiante) {
    console.log(`hola,${estudiante}`);

}

while(estudiantes.lenght > 0) { //Mientras que estudiantes.lenght sea mayor que 0 se tiene que cumplir el siguiente ciclo://
    console.log(estudiantes);
    var estudiante = estudiantes.shift(); //Con esta variable .shift lo que hacemos es restar uno de nuestros valores hasta que sea igual a 0)//
    saludarEstudiantes(estudiante);
}
