import "../../Assets/css/Footer-main.css";
import navlogo from "../../Assets/images/nav-logo.png";

const FooterMain = () => {
  return (
    <>
      <div className="footer-main">
        <nav className="navbar">
          <div>
            <img src={navlogo} className="navlogo" alt="brand logo" />
          </div>
          <div>
                   <ul className="nav-links">
                       <li><a href="#categories" className="anchor" >Categories</a></li>
                       <li><a href="#legacy" className="anchor">The Legacy of Sikka</a></li>
                       <li><a href="#register" className="anchor">How to Register</a></li>
                       <li><a href="#rules" className="anchor">Rules & Rewards</a></li>
                       <li><a href="#jury" className="anchor">JURY</a></li>
                       <li><a href="#faq" className="anchor">FAQs</a></li>
                   </ul>
   
          </div>
        </nav>
        <div className="Contactus">
          <div>
            <h3> CONTACT US</h3>
            <p>Delhi Office</p>
            <p>Plot No. 10 & 11, Prius Heights,</p>
              <p>Sector 125, Noida-201303, India</p>
              <p>Phone: +91 120 4094 500</p>
              <p>Email: sikkanominations@gmail.com</p>
          </div>
          <div>
            <h3> QUICK LINKS</h3>
            <ul className="footer-link">
              <li>
                <a href="#categories" className="anchor">
                  Categories
                </a>
              </li>
              <hr className="footer-hr"/>
              <li>
                <a href="#legacy" className="anchor">
                  The Legacy of Sikka
                </a>
              </li>
            <hr className="footer-hr"/>


              <li>
                <a href="#register" className="anchor">
                  How to Register
                </a>
              </li>
              <hr className="footer-hr"/>
              <li>
                <a href="#rules" className="anchor">
                  Rules & Rewards
                </a>
              </li>
              <hr className="footer-hr"/>

              <li>
                <a href="#jury" className="anchor">
                  JURY
                </a>
              </li>
              <hr className="footer-hr"/>

              <li>
                <a href="#faq" className="anchor">
                  FAQs
                </a>
              </li>
              <hr className="footer-hr"/>

            </ul>
          </div>
        </div>
        <span>
          Skymet Weather Services Private Limited © All rights reserved.
        </span>
      </div>
    </>
  );
};

export default FooterMain;
