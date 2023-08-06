import { CHAT_ROUTE } from "./consts.js";
import { Navigate } from "react-router-dom";

export function MissChat()
{
    return <Navigate to = {CHAT_ROUTE}/>;
}