
import "../../Assets/css/Footer-main.css"
import navlogo from "../../Assets/images/nav-logo.png"

const FooterMain=()=>{

    return(
        <>
        <div className="footer-main">

        <nav className="navbar">
               <div>
                    <img src={navlogo} className="navlogo" alt="brand logo"/>
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


           </nav>
        <span>Skymet Weather Services Private Limited © All rights reserved.</span>
        </div>
        </>
    )

}

export default FooterMain;