import React from "react";
import { Login } from "../components/Login/Login";
import { CheckPermissions } from "./CheckPermissions";
import { Navigate, Route, useNavigate} from "react-router";
import { useSelector } from "react-redux";
import { UserPage } from "../view/userPage/UserPage";


export const AuthRoute = ({component : RouteComponent, role}) => {

    const userRole = useSelector(state => state.userInfo)
 
    userRole && console.log('user role from private route : ', userRole?.role);
    const isPermitted = userRole && userRole?.role && CheckPermissions(role, userRole.role);
    console.log("is permitted: ", isPermitted)
    if(userRole && isPermitted){
        return <RouteComponent />
    }

    return isPermitted !== undefined && <Navigate to="/login" />
};