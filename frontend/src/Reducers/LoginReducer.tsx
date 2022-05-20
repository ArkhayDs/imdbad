import useEraseCookie from "../Hook/useEraseCookie";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import {ActionsInterfaces} from "../Interface/ActionsInterfaces";
import {LocalUserInterface} from "../Interface/LocalUserInterface";
import useRegister from "../Hook/useRegister";
import {useEffect} from "react";
import {Login} from "../Actions/LoginActions";
import useGetCookies from "../Hook/useGetCookies";
import {useDispatch, useSelector} from "react-redux";

export function LoginReducer(state: { loggedUser: LoginResponseInterface; localUser: LocalUserInterface}, action: ActionsInterfaces) : any {
    const eraseCookie = useEraseCookie();
    const register = useRegister();

    switch (action.type) {
        case 'LOGIN':
            return {
                loggedUser: {
                    status: "success",
                    // @ts-ignore
                    token: action.payload.token ? action.payload.token : "",
                    // @ts-ignore
                    username: action.payload.username ? action.payload.username : ""
                },
                localUser: {
                    // @ts-ignore
                    password: action.payload.password ? action.payload.password : "",
                    // @ts-ignore
                    username: action.payload.username ? action.payload.username : "",
                }
            };

        case 'LOGOUT':
            eraseCookie();
            return state = {
                loggedUser: {
                    status: "error",
                    token: "",
                    username: ""
                },
                localUser: {
                    password: "",
                    username: "",
                }
            };

        case 'REGISTER':
            console.log("registerReducer :",action.payload)
            return state;

        // case 'LOGIN':
        //     state.loggedUser = {
        //         status: "success",
        //         // @ts-ignore
        //         token: action.payload.token ? action.payload.token : "",
        //         // @ts-ignore
        //         username: action.payload.username ? action.payload.username : "",
        //     }
        //     state.localUser = {
        //         // @ts-ignore
        //         password: action.payload.password ? action.payload.password : "",
        //         // @ts-ignore
        //         username: action.payload.username ? action.payload.username : "",
        //     }
        //     return state;
        //
        // case 'LOGOUT':
        //     eraseCookie();
        //     return {
        //         status: "error",
        //         token: "",
        //         username: ""
        //     };
        //
        // case 'REGISTER':
        //     console.log("registerReducer :",action.payload)
        //     return {
        //         username: "coucou",
        //         password: "state.password"
        //     };
        //
        // default:
        //     return state;
    }

    return state;
}