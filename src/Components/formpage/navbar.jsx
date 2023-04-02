
import "../../Assets/css/Navbar.css"
import navlogo from "../../Assets/images/nav-logo.png"
import Button from '@mui/material/Button';

const Navbar =()=>{
    return (
       <>
           <nav className="navbar">
               <div>
                    <img src={navlogo} className="navlogo" alt="brand logo"/>
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
                   <Button className="nav-button display">Register</Button>
               </div>
           </nav>
       </>
    )   
}

export default Navbar;
