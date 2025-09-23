const productos = [
	{ nombre: "Laptop", precio: 12000 },
	{ nombre: "Mouse", precio: 250 },
	{ nombre: "Teclado", precio: 750 },
	{ nombre: "Monitor", precio: 3000 },
]

// Código
const test = productos.filter(x => x.precio > 1000)

const nombres = test.map(x => x.nombre)

// console.log(test); 
console.log(nombres);// Laptop, monitor