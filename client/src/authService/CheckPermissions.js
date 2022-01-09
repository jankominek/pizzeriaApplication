import { useSelector } from "react-redux"
import React from "react";

export const CheckPermissions = (requiredRole, userRoleType) => {
    console.log("user role in checkPermission : ", userRoleType)
    if(userRoleType){
        if(requiredRole === "General"){
            console.log("is general")
        }
        const permission = userRoleType === requiredRole;
        return permission;
    }else{
        return false;
    }
}