const personas = [
    { nombre: "Ana", edad: 22},
    { nombre: "Luis", edad: 35},
    { nombre: "Maria", edad: 28}
]

const esLuis = personas.find(x => x.nombre == "Luis")
console.log(esLuis)

personas.forEach(x => console.log(x.nombre + " " + x.edad))

const totalEdades = personas.reduce((sum, x) => sum + x.edad, 0)
console.log(totalEdades)