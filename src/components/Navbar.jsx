import { FaBars, FaTimes } from "react-icons/fa"
import "./Navbar.css"
import { Link } from "react-router-dom"
import { useState } from "react"


export default function Navbar(){

    const[click, setClick]=useState(false)
    const handleClcik = () => setClick(!click)

    const[color, setColor]=useState(false);
    const changeColor = () => {
        if(window.scrollY>=100){
            setColor(true);
        }
        else{
            setColor(false)
        }
    }
    
    window.addEventListener("scroll", changeColor)
    return(
        <div className={color? "header header-bg": "header"}>
        <Link to="/">
        <img className="logo" src="/logo-dodge.webp" alt="Logo" />
        
        </Link>
        <ul className={click ? "nav-menu active" : "nav-menu"}>
            <li>
                <Link to="/">Home</Link>
            </li>
            
            <li>
                <Link to="/about">About</Link>
            </li>
            
            <li>
                <Link to="/services">Services</Link>
            </li>

            <li>
            <Link to="/contact">Contact</Link>
            </li>
        
        </ul>

        <div className="hambuger" onClick={handleClcik}>
            {click ? (<FaTimes size={20} style={{color:"#fff"}}/>):(<FaBars size={20} style={{color:"#fff"}}/>)}
            
        </div>

        </div>
    )
}