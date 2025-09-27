function verificarUsuario(usuario) {
    let promesa = new Promise((resolve, reject) => {
        if (usuario == "admin") {
            resolve("Acceso concedido")
        } else {
            reject("Acceso denegado")
        }
    });
    return promesa
}

// .then() y .catch() para manejar el resultadao
verificarUsuario("admin")
    .then(res => console.log(res)) // Acceso concedido
    .catch(err => console.error(err));
    
verificarUsuario("Ivan")
    .then(res => console.log(res))
    .catch(err => console.error(err)); // Acceso denegado