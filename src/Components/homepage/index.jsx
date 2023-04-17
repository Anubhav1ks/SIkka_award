import React from "react";
import "../../Assets/css/style.css"
import navlogo from "../../Assets/images/nav-logo.png";
import 'bootstrap/dist/css/bootstrap.min.css';
import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";
import { Link } from 'react-router-dom';

const Home = () => {
    const navigate=useNavigate()
    const handleRegister=()=>{
        navigate("/register");
    }


    return (
        <>
           <nav className="navbar" id="NAVBAR">
               <div>
                  <Link to="/">   <img src={navlogo} alt="not found" className="navlogo"/></Link>
               </div>
               <div>
                   <ul className="nav-links">
                       <li><a href="#categories" className="anchor" >Categories</a></li>
                       <li><a href="#legacy" className="anchor">The Legacy of Sikka</a></li>
                       <li><a href="#register" className="anchor">How to Register</a></li>
                       <li><a href="#rules" className="anchor">Rules & Rewards</a></li>
                       <li><a href="#jury" className="anchor">JURY</a></li>
                       <li><a href="#faq" className="anchor">FAQ</a></li>
                   </ul>
   
               </div>
               <div>
                   <Button className="nav-button display btn-hover" onClick={handleRegister}>Register</Button>
               </div>
           </nav>
       </>
    )   
}

export default Home;
