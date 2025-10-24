export function generarToken (){
    let token = ""
    for (let index = 1; index <= 20; index++) {
        token += Math.random().toString(36).substring(2) /* toString() Se representa entre numeros y letras */ /* substring() elimina las dos primeras posiciones */
    }

    return token
}