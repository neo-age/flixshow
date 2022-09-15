import './Register.scss'
import navbarLogo from '../../media/icons/netflix-official.svg';
import { useRef, useState } from 'react';

const Register = () => {
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")

    const emailRef = useRef()
    const passwordRef = useRef()

    const handleStart = ()=>{
        setEmail(emailRef.current.value)
    }
    const handleFinish = ()=>{
        setPassword(passwordRef.current.value)
    }
    return (
        <div className='register'>
            <div className="top">
                <div className="wrapper">
                <img className='logo' src={navbarLogo} alt="" />
                <button className="loginbutton">Sign In</button>
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
                    <input type="password" className="email" placeholder='password' ref={passwordRef}/>
                    <button className="registerbutton" onClick={handleFinish}>Start</button>
                </form>
                )}
                
            </div>
        </div>
    );
}

export default Register;
