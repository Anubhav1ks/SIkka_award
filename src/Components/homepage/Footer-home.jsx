
import "../../Assets/css/Footer-main.css"
import arrow from "../../Assets/images/footerarrow.png"
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
                   <ul className="nav-links"> {/* Add a class name to ul */}
                       <li>Categories</li>
                       <li>The Legacy of Sikka</li>
                       <li>How to Register</li>
                       <li>Rules & Rewards</li>
                       <li>Jury</li>
                   </ul>
   
               </div>
        <img src={arrow} className="arrow" alt="arrow"/>

           </nav>
        <span>Skymet Weather Services Private Limited © All rights reserved.</span>
        </div>
        </>
    )

}

export default FooterMain;