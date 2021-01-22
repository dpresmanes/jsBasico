//Arrays con objetos dentro//
var articulos = [

     {nombre: "Bici", costo:3000},
     {nombre: "Tv", costo:2500},
     {nombre:"libro", costo:320},
     {nombre:"Celular", costo:10000},
     {nombre:"Laptop", costo:20000},
     {nombre:"Teclado", costo: 500},
     {nombre:"Audifono", costo: 2500},
];

// Filter nos sirve para filtrar cosas especificas//
var articulosFiltrados = articulos.filter(function(articulo){
    return articulo.costo <= 500
});

// Map nos ayuda a mapear el contenido del array y nos trae solo lo que pedimos//
var nombreArticulos = articulos.map(function(articulo){
    return articulo.nombre
});

// Nos va a ayudar a encontrar algo dentro de nuestro articulo//

var encuentraArticulo = articulos.find(function(articulo){
    return articulo.nombre === "laptop"
});

// Este metodo no nos va a 

articulos.forEach(function(articulo){
    console.log(articulo.nombre);
})
 
var articulosBaratos = articulos.some(function(articulo){
    return articulos.costo <= 700;
});