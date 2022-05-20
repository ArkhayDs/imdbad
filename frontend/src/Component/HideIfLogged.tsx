import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import {useSelector} from "react-redux";

interface HideIfLoggedPropsInterface {
    children: JSX.Element
}

export default function HideIfLogged({children}: HideIfLoggedPropsInterface) {
    // @ts-ignore
    const loggedUser = useSelector(state=>state.loggedUser);

    if (loggedUser.username) {
        return <></>
    }
    return children
}
