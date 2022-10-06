import "./Navbar.scss"
import navbarLogo from '../../media/icons/netflix-official.svg';
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons';
import { useState } from "react";
import {Link} from "react-router-dom";
import { useContext } from "react";
import { AuthContext } from "../../AuthContext/AuthContext";
import { logout } from "../../AuthContext/AuthAction";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)
    const {dispatch} = useContext(AuthContext)

    window.onscroll = () => {
        setIsScrolled(window.pageYOffset === 0 ? false : true)
        return () => window.onscroll = null
    }

    //console.log(isScrolled);
    return (
        <div className={isScrolled ? "navbar scrolled" : "navbar"}>
            <div className="container">
                <div className="left">
                    <img src={navbarLogo} alt="" />
                    <Link to="/" className="link">
                    <span>Home</span>
                    </Link>
                    <Link to="/series" className="link">
                    <span>Series</span>
                    </Link>
                    <Link to="/movies" className="link">
                    <span>Movies</span>
                    </Link>
                    <span>New and Popular</span>
                    <span>My List</span>
                </div>
                <div className="right">
                    <Search className="icons"/>
                    <span>KID</span>
                    <Notifications className="icons"/>
                    <img src="https://images.unsplash.com/photo-1643191834226-ba266bf480bb?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=687&q=80" alt="" />
                    <div className="profile">
                        <ArrowDropDown className="icons"/>
                        <div className="options">
                            <span>Settings</span>
                            <span onClick={()=>dispatch(logout())}>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
