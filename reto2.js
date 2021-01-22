// Generar una funcion constructora//
// Hacer un loop para dar una lista de 30 carros que se construyan solos//

function auto (marca, modelo, annio) {
    this.marca = marca;
    this.modelo = modelo;
    this.annio = annio;
    
}

var marca = ["Tesla","Chevrolet","toyota"];
var modelo = ["modelo 3", "onix","corolla"];
var annio = [2010,2020,2030];
var autos = [];

// loop para crear objetos //

for(var i = 0; i < marca.length; i++){  
    autos [i] = new auto(marca [i], modelo[i], annio[i]);
}

for ( var i = 0; i < autos.length; i++){
    console.log(autos[i])
} 



