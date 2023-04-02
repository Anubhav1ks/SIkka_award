import logo1 from "../../../Assets/images/logo-1.svg"
import "../../../Assets/css/CenterForm.css"
import circle2 from "../../../Assets/images/gp-1.png"
import { Button } from "@mui/material"

const Centerpage = () => {
    return(

        <>
            <div className="CenterForm">
                <div>
                <div className="outer-div">
            <p className="memory-text">
            In the loving memory of Mr. Dev Raj Sikka, Skymet presents the
            </p>

            <p className="annual-skymet">
                ANNUAL SKYMET 
            </p>
             <br />
            <p className="annual-skymet2">
                SIKKA AWARD 2023
            </p>

            <div className="win-trophydiv">
            <p className="win-trophy">
            The Sikka Meteorology Award 2023, presented by 
            Skymet Weather, is a prestigious recognition honouring the 
            legacy of Mr. Dev Raj Sikka. Register
             now and stand a chance to win the trophy and Rs. 1,00,000/-
            </p>
            </div>
            <div>
                   <Button className="nav-button">REGISTER</Button>
                   <Button className="nav-button-1">LEARN MORE</Button>

               </div>
         </div>
                </div>
                <div className="brand-logo">
                <img src={logo1} alt="Logo" />
                <img src={circle2} className="ecclips" alt="Logo" />
                
                </div>
            </div>
        </>
        

    )
}

export default Centerpage;
