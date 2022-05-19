import useEraseCookie from "../Hook/useEraseCookie";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";

export function LoginReducer(state: LoginResponseInterface, action: object) : LoginResponseInterface {
    const eraseCookie = useEraseCookie();

    // @ts-ignore
    switch (action.type) {
        case 'LOGOUT':
            eraseCookie();
            return {
                status: "error",
                token: "",
                username: ""
            };

        default:
            console.log("Et c'est raté");
            return state;
    }
}