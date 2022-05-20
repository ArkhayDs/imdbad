import axios from "axios";



// export const login = (displayName, id, role) => ({
//   type: "LOGIN",
//   displayName,
//   id,
//   role
// });

export const Register = () => {
    return (username, password) => {
        return axios({
            url: "http://localhost:2345/register.php",
            method: "post",
            withCredentials: true,
            data: new URLSearchParams({
                username: username,
                password: password,
            }),
        })
            .then(res => res.data)
    }
}