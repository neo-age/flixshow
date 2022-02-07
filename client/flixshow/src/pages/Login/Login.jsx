import './Login.scss'
import navbarLogo from '../../media/icons/netflix-official.svg';

const login = () => {
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
                    <input type="email" placeholder='Email or phone number'/>
                    <input type="password" placeholder='Password'/>
                    <button className="loginbutton">Sign In</button>
                    <span>New to netflix? <b>Sign Up now.</b></span>
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
