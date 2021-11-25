import { Login } from "../components/Login/Login";
import { Register } from "../components/Register/Register";
import { StartPage } from "../view/startPage/StartPage";
import { UserPage } from "../view/userPage/UserPage";

const prefixPAth = "http://localhost:3000"

export const routes = [
    { url: "/", element: <StartPage />},
    { url:"/login", element: <Login/>},
    { url:"/register", element: <Register />},
    { url:"/pizzeria", element: <UserPage/>},
]

export default routes;