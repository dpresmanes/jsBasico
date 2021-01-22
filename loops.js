var estudiantes = ["maria","sergio","rosa","daniel"]; // Tenemos un array con 4 estudiantes //

function saludarEstudiantes(estudiante) {  // Funcion que se va a encargar de saludar a los estudiantes//
    console.log( `hola, ${estudiante}`); // comillas invertidas alt 96//
}

for(var i = 0; i < estudiantes.length; i++){  
    saludarEstudiantes(estudiantes[i]);
}

// Otra forma de utilizar for //

for(var estudiante of estudiantes){
    saludarEstudiantes(estudiante);
    
}