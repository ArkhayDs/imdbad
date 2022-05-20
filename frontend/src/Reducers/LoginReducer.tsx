import useEraseCookie from "../Hook/useEraseCookie";
import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import {ActionsInterfaces} from "../Interface/ActionsInterfaces";
import {LocalUserInterface} from "../Interface/LocalUserInterface";
import useRegister from "../Hook/useRegister";

export function LoginReducer(state: LoginResponseInterface & LocalUserInterface, action: ActionsInterfaces) : any {
    const eraseCookie = useEraseCookie();
    const register = useRegister();

    switch (action.type) {
        case 'LOGOUT':
            eraseCookie();
            return {
                status: "error",
                token: "",
                username: ""
            };

        case 'REGISTER':
            console.log("registerReducer :",action.payload)
            return {
                username: "coucou",
                password: "state.password"
            };

        default:
            console.log("Et c'est raté");
            return state;
    }

    return state;
}