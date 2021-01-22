//estructura de datos que te permite guardar datos//

var frutas = ["Manzana","platano", "cereza", "fresa"];
console.log(frutas);
// me devuelve los dato que hay en mi array//
console.log(frutas.lenght);
// me devuelve cantidad de datos en mi Array//
console.log(frutas[0]);
// me devuelve un dato especifico //


//Para agregar mas elementos dentro de un array//
var frutas = ["Manzana","platano", "cereza", "fresa"];

var masfrutas = frutas.push("uvas");

//Para eliminar el Ultimo Elemento de mi Array //

var ultimo = frutas.pop("uvas");
// Agrega un nuevo valor al inicio de nuestro array//

var nuevaLongitud = frutas.unshift("uvas");

// Borra el primer valor ingresado//

var borrarFruta = frutas.shift("uvas");

// Me da la posicion de un valor dentro de mi arraid//

var posicion = frutas.indexOf("cereza");
