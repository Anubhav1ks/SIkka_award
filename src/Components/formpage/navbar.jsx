
import "../../Assets/css/Navbar.css"
import navlogo from "../../Assets/images/nav-logo.png"
import Button from '@mui/material/Button';
import { Link } from 'react-router-dom';
const Navbar =()=>{
    return (
       <>
           <nav className="navbar">
               <div>
                   <Link to="/"> <img src={navlogo} className="navlogo" alt="brand logo"/></Link>
               </div>
               <div>
                   <ul className="nav-links">
                       <li><a href="#CATEGORIES" className="anchor" >Categories</a></li>
                       <li><a href="#REMEMBERING" className="anchor">The Legacy of Sikka</a></li>
                       <li><a href="#REGISTER" className="anchor">How to Register</a></li>
                       <li><a href="#REWARDS" className="anchor">Rules & Rewards</a></li>
                       <li><a href="#JURY" className="anchor">Jury</a></li>
                   </ul>
   
               </div>
               <div>
                   <Button className="nav-button display btn-alt">Register</Button>               
               </div>
           </nav>
       </>
    )   
}

export default Navbar;
