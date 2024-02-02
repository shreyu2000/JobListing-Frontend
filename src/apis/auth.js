//fetch or axios
import axios from "axios";
const backendUrl = "http://localhost:4000/api/v1";

export const registerUser  =async ({name ,email,mobile ,password})=>{
    try {
    const reqUrl = `${backendUrl}/auth/register`;
    const reqPayload = {name ,email,mobile ,password};
    const response = await axios.post(reqUrl , reqPayload)
    return response.data;
        
    } catch (error) {
        console.log(error);
    }
}

export const loginUser  = async ({email,password})=>{
    try {
    const reqUrl = `${backendUrl}/auth/login`;
    const reqPayload = {email,password};
    const response = await axios.post(reqUrl , reqPayload)
    return response.data;
        
    } catch (error) {
        console.log(error);
    }
}

