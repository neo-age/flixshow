import axios from "axios";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

export const loginCall = async (user, dispatch)=>{
    dispatch(loginStart())
    try{
        const res = await axios.post("http://localhost:4400/api/auth/login", user);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure(err))
    }
}