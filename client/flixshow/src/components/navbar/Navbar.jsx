import "./Navbar.scss"
import navbarLogo from '../../media/icons/netflix-official.svg';
import {Search, Notifications, ArrowDropDown} from '@material-ui/icons';
import { useState } from "react";

const Navbar = () => {
    const [isScrolled, setIsScrolled] = useState(false)

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
                    <span>Home</span>
                    <span>Series</span>
                    <span>Movies</span>
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
                            <span>Logout</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Navbar;
