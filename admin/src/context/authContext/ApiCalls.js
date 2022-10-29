import axios from "axios";
import { Url } from "../../Urls";
import { loginFailure, loginStart, loginSuccess } from "./AuthAction";

export const loginCall = async (admin, dispatch)=>{
    dispatch(loginStart())
    try{
        const res = await axios.post(`${Url}/api/admin_auth/login`, admin);
        dispatch(loginSuccess(res.data))
    }catch(err){
        dispatch(loginFailure(err))
    }
}