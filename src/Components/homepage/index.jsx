import React from "react";
import "../../Assets/css/style.css"
import navlogo from "../../Assets/images/Sikka-Award-Logo-02.png";
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
                       <li><a href="#CATEGORIES" className="anchor" >Categories</a></li>
                       <li><a href="#REMEMBERING" className="anchor">The Legacy of Sikka</a></li>
                       <li><a href="#REGISTER" className="anchor">How to Register</a></li>
                       <li><a href="#REWARDS" className="anchor">Rules & Rewards</a></li>
                       <li><a href="#JURY" className="anchor">JURY</a></li>
                   </ul>
   
               </div>
               <div>
                   <Button className="nav-button display" onClick={handleRegister}>Register</Button>
               </div>
           </nav>
       </>
    )   
}

export default Home;
