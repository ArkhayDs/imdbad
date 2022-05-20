import useRegister from "../Hook/useRegister";

export const Login = {
    type: 'LOGIN'
}

export const Register = {
    type: 'REGISTER',
    payload: {
        username: "",
        password: ""
    }
}

export const Logout = {
    type: 'LOGOUT'
}