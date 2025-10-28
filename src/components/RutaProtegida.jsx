import { consultarLocalStorage } from "../helpers/funciones"
import { Navigate } from "react-router-dom"

function RutaProtegida ({componente}){
    let token = consultarLocalStorage("token")

    if (token){
        return componente
    } else {
        return <Navigate to={"/login"}/>
    }
}

export default RutaProtegida