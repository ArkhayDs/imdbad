import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import React from "react";
import {useSelector} from "react-redux";

interface HideIfNotLoggedPropsInterface {
    children: any
}

export default function HideIfNotLogged({children}: HideIfNotLoggedPropsInterface) {
    // @ts-ignore
    const loggedUser = useSelector(state=>state.loggedUser);

    if (!loggedUser.token) {
        return <></>
    }
    return children
}
