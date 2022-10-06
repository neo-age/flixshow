import './Login.scss'
import { useContext, useState } from "react"
import { useNavigate } from 'react-router-dom';
import { AuthContext } from "../../AuthContext/AuthContext"
import { loginCall } from "../../AuthContext/ApiCalls"
import navbarLogo from '../../media/icons/netflix-official.svg';


const login = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const {isFetching, dispatch} = useContext(AuthContext)

    const navagate = useNavigate()
    const handlelogin = (e)=>{
        e.preventDefault()
        loginCall({email, password},dispatch)
      }
    return (
        <div className='login'>
            <div className="top">
                <div className="wrapper">
                <img className='logo' src={navbarLogo} alt="" />
                </div>
            </div>
            <div className="container">
                <form>
                    <h1>Sign In</h1>
                    <input type="email" placeholder='Email or phone number' onChange={(e)=>setEmail(e.target.value)}/>
                    <input type="password" placeholder='Password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="loginbutton" onClick={handlelogin} disabled={isFetching}>Sign In</button>
                    <span>New to netflix? <b onClick={()=>{navagate("/register")}}>Sign Up now.</b></span>
                    <small>
                        This page is protected by Google reCAPTCHA to ensure you're not a
                        bot. <b>Learn more</b>.
                    </small>
                </form>
            </div>
        </div>
    );
}

export default login;
