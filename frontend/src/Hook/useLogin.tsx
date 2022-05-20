import {LoginResponseInterface} from "../Interface/ResponsesInterfaces";
import axios from "axios";

export default function useLogin() {
    return (username: string, password: string): Promise<LoginResponseInterface> => {
        console.log(username,password);
        return axios.get('http://localhost:5555/login.php', {
            withCredentials: true,
            auth: {
                username: username,
                password: password
            }
        })
            .then(res => res.data)
    }
}
