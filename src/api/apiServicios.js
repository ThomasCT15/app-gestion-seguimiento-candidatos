let URL_BASE = 'http://localhost:3000/'
export let endPoints = {
    usuarios: `${URL_BASE}usuarios/`, /* `` Interpolacion de datos: es incrustar una variable dentro de una cadena de texto */
    /* usuarios: URL_BASE + "usuarios/", */
    vacantes: `${URL_BASE}vacantes/`,
    postulaciones: `${URL_BASE}postulaciones/`,
    candidatos: `${URL_BASE}candidatos/`,
};