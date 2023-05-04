import logo1 from "../../../Assets/images/logo-1.png"
import "../../../Assets/css/CenterForm.css"
import circle2 from "../../../Assets/images/gp-1.png"
import { Button } from "@mui/material"
import { useNavigate } from "react-router-dom";

const Centerpage = () => {
    const navigate = useNavigate()
    const handleRegister = () => {
        navigate("/register");
    }

    return (

        <>
            <div className="CenterForm" id="HOME">
                <div>
                    <div className="outer-div">
                        <p className="memory-text">
                            In the loving memory of Mr. Dev Raj Sikka, Skymet presents the
                        </p>

                        <p className="annual-skymet">
                            Skymet Sikka 
                        </p>
                        <p className="annual-skymet2">
                            Meteorology Award 2023
                        </p>

                        <div className="win-trophydiv">
                            <p className="win-trophy">
                                The Sikka Meteorology Award 2023, presented by Skymet Weather, is a prestigious recognition honouring the legacy of Mr Dev Raj Sikka.
                            </p>
                        </div>
                        <div>
                            <Button className="nav-button btn-alt" onClick={handleRegister}>REGISTER</Button>


                            <Button className="nav-button-1 "><a href="#CATEGORIES" className="anchor" >LEARN MORE</a></Button>

                        </div>
                    </div>
                </div>
                <div className="brand-logo">
                <img src={logo1} alt="Logo" className="bird"/>
                <img src={circle2} className="ecclips" alt="Logo" />
                
                </div>
            </div>
        </>


    )
}

export default Centerpage;
