function simularPeticionAPI() {
    return new Promise(resolve => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {

    let test = await simularPeticionAPI()
    console.log(test)

    // Await para esperar la promesa de simularPeticion
    // Imprime el resultado
}

obtenerDatos()