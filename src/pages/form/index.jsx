import Footer from "../../Components/formpage/Footer";
import CenterForm from "../../Components/formpage/form";
import Navbar from "../../Components/formpage/navbar";


const Form = () => {
    return (
        <>
            <div className="main-container">
                <Navbar />
                <div className="headding">
                    <span className="heading-1">In the loving memory of <span style={{ "color": "#CBAA5D", marginLeft: "10px" }}>  Mr. Dev Raj Sikka  </span>, Skymet presents the</span><br />
                    <span className="heading-2">Annual Skymet Sikka Award 2023</span>
                </div>
                <CenterForm/>
                <Footer/>
            </div>
        </>
    )
}
export default Form;