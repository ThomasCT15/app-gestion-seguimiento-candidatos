import Login from "../pages/auth/login/Login";
import Registro from "../pages/auth/registro/Registro";
import Dashboard from "../pages/dashboard/Dashboard";
import Home from "../pages/home/Home";

export let RouterApp = [
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/registro",
        element: <Registro />,
    },
    {
        path: "/dashboard",
        element: <Dashboard />,
    },
    {
        path: "/",
        element: <Home />,
    },
];