import axios from "axios";
import authHeader from "./auth-header";



const API = 'http://localhost:4000/users';

const register = (username, password, role, availabilityStatus) => {
    return axios.post(API, "register", {
        username,
        password,
        role,
        availabilityStatus,
    })
}

const login = (username, password) => {
    return axios.post(API, {
        username, password
    }
    ).then((response) => {

        let value = response.data;
        var result = value.find(val => val.username === username && val.password === password)
            if(result){
                // loginMe(true, result.username)
                localStorage.setItem("user", JSON.stringify(response.json()));
                console.log(response?.data, "testtt");
                return response.data;
            }
            else{
                // loginMe(false)
                console.log(response.data, "testttelse");
                return response.data;
            }
    })
}

export function loginMe(isAuthenticated, username){
    return {
        type:'LOGIN',
        isAuthenticated : isAuthenticated,
        user: username
    }
}


const logout = () => {
    localStorage.removeItem("user");
}

const authService = {
    register,
    login, logout
}

export default authService;