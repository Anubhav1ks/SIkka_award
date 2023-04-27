import Footer from "../../Components/formpage/Footer";
import CenterForm from "../../Components/formpage/form";
import Navbar from "../../Components/formpage/navbar";
import Button from '@mui/material/Button';
import back from "../../Assets/images/back.svg"
import { useNavigate } from "react-router-dom";
const Form = () => {

    const navigate=useNavigate()
    const handleback=()=>{
        navigate("/");
    }

    return (
        <>
            <div className="main-container">
                <Navbar />
                <div className="goback navbar">
                   <Button className="" onClick={handleback}><a href="/SikkaAwards" className="anchor" > <img src={back} alt="no img"/> Go Back</a></Button>
                </div>
                <div className="headding">
                    <span className="heading-1">In the loving memory of <span style={{ "color": "#CBAA5D", marginLeft: "10px" }}>  Mr. Dev Raj Sikka,  </span> Skymet presents the</span><br />
                    <span className="heading-2">Skymet Sikka Meteorology Award 2023</span>
                </div>
                <CenterForm/>
                <Footer/>
            </div>
        </>
    )
}
export default Form;