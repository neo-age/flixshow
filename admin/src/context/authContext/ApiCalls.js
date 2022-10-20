import axios from "axios";
import { url } from "../../urls";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

export const loginCall = async (user, dispatch)=>{
    dispatch(loginStart())
    try{
        const res = await axios.post(`${url}/api/auth/login`, user);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure(err))
    }
}