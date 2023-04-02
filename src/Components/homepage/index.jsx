import React from "react";
import "../../Assets/css/style.css"
import navlogo from "../../Assets/images/Sikka-Award-Logo-02.png";
import 'bootstrap/dist/css/bootstrap.min.css';

// import Container from 'react-bootstrap/Container';
// import Form from 'react-bootstrap/Form';
// import Nav from 'react-bootstrap/Nav';
// import Navbar from 'react-bootstrap/Navbar';
// import NavDropdown from 'react-bootstrap/NavDropdown';


import Button from '@mui/material/Button';
import { useNavigate } from "react-router-dom";

const Home = () => {
    const navigate=useNavigate()
    const handleRegister=()=>{
        navigate("/register");
    }


    return (
        <>
           <nav className="navbar">
               <div>
                    <img src={navlogo} className="navlogo"/>
               </div>
               <div>
                   <ul className="nav-links"> {/* Add a class name to ul */}
                       <li>Categories</li>
                       <li>The Legacy of Sikka</li>
                       <li>How to Register</li>
                       <li>Rules & Rewards</li>
                       <li>Jury</li>
                   </ul>
   
               </div>
               <div>
                   <Button className="nav-button" onClick={handleRegister}>Register</Button>
               </div>
           </nav>
       </>
    )   
}

export default Home;
