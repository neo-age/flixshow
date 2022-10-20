import './Register.scss'
import navbarLogo from '../../media/icons/netflix-official.svg';
import { useRef, useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { url } from '../../Urls';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [username, setUsername] = useState("")
    const navagate = useNavigate()

    const emailRef = useRef()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = async (e)=>{
        e.preventDefault()
        try {
            await axios.post(`${url}/api/auth/regester`,{email,username, password});
            navagate("/login")
        } catch (error) {
            console.log(error);
        }
        
        
    }
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                <img className='logo' src={navbarLogo} alt="" />
                <button className="loginbutton" onClick={()=>{navagate("/login")}}>Sign In</button>
                </div>
            </div>
            <div className="container">
                <h1>Unlimited movies, TV shows, and more.</h1>
                <h2>Watch anywhere. Cancel anytime.</h2>
                <p>
                Ready to watch? Enter your email to create or restart your membership.
                </p>
                {!email ? (
                <div className="input">
                    <input type="email" className="email" placeholder='email address' ref={emailRef}/>
                    <button className="registerbutton" onClick={handleStart}>Get started</button>
                </div>
                ):(
                <form className="input">
                    <input type="username" className="email" placeholder='user name' onChange={(e)=>setUsername(e.target.value)}/>
                    <input type="password" className="email" placeholder='password' onChange={(e)=>setPassword(e.target.value)}/>
                    <button className="registerbutton" onClick={handleFinish}>Start</button>
                </form>
                )}
                
            </div>
        </div>
    );
}

export default Register;
