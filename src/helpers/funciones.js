export function generarToken (){
    let token = ""
    for (let index = 1; index <= 20; index++) {
        token += Math.random().toString(36).substring(2) /* toString() Se representa entre numeros y letras */ /* substring() elimina las dos primeras posiciones */
    }

    return token
}

export function guardarLocalStorage(llave, valor){
    localStorage.setItem(llave, JSON.stringify(valor)) /* primero se pone el nombre, luego se pone el valor */
}

export function consultarLocalStorage(llave){
    return JSON.parse(localStorage.getItem(llave))
}