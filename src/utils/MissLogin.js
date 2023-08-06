import { LOGIN_ROUTE } from "./consts.js";
import { Navigate } from "react-router-dom";

export function MissLogin()
{
    return <Navigate to = {LOGIN_ROUTE}/>;
}