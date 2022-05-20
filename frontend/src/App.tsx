import 'bootstrap/dist/css/bootstrap.min.css';
import {useEffect, useReducer, useState} from "react";
import useLogin from "./Hook/useLogin";
import {BlogInterface, LoginResponseInterface} from "./Interface/ResponsesInterfaces";
import {LocalUserInterface} from "./Interface/LocalUserInterface";
import LoginForm from "./Component/LoginForm";
import HideIfLogged from "./Component/HideIfLogged";
import useRegister from "./Hook/useRegister";
import HideIfNotLogged from "./Component/HideIfNotLogged";
import useGetCookies from "./Hook/useGetCookies";
import useEraseCookie from "./Hook/useEraseCookie";
import {BrowserRouter, Route, Routes} from "react-router-dom";
import NeedAuth from "./Component/NeedAuth";
import {LoginReducer} from "./Reducers/LoginReducer";
import {Login, Logout, Register} from './Actions/LoginActions';
import {store} from "./index";
import {useDispatch, useSelector} from "react-redux";

export default function App() {
    const dispatch = useDispatch();
    // @ts-ignore
    const loggedUser = useSelector(state=>state.loggedUser);
    // @ts-ignore
    const localUser = useSelector(state=>state.localUser);

    // Determines if the user wants to LogIn or to Register
    const [needsLogin, setNeedsLogin] = useState<boolean>(true)
    const [needsUpdate, setNeedsUpdate] = useState<boolean>(false)

    const login = useLogin();
    const cookies = useGetCookies();
    const register = useRegister();

    useEffect(() => {
        console.log(localUser);
        if (needsLogin && localUser.username !== '') {
            console.log('login ?')
            login(localUser.username, localUser.password)
                .then(data => dispatch(Login(data)))
        } else if (!needsLogin && localUser.username !== '') {
            console.log('register ?', localUser.username)
            register(localUser.username, localUser.password)
                .then(data => dispatch(Login(data)))
        }
    }, [localUser])

    useEffect(() => {
        if (Object.keys(cookies).includes('hetic_token') && Object.keys(cookies).includes('hetic_username')) {
            console.log('got cookies !', loggedUser)
            dispatch(Login({
                status: loggedUser.status,
                username: cookies.hetic_username,
                token: cookies.hetic_token
            }))
        }
    }, [])

    const handleClick = () => {
        console.log("deconnexion...")
    }

    return (
        <BrowserRouter>

            <div className='container mt-5'>
                <HideIfLogged>
                    <LoginForm needsLogin={needsLogin} setNeedsLogin={setNeedsLogin}/>
                </HideIfLogged>

                <HideIfNotLogged>
                    <button className='btn btn-danger d-block mx-auto mb-3' onClick={handleClick}>Disconnect
                    </button>
                </HideIfNotLogged>
            </div>

        </BrowserRouter>
    )
}