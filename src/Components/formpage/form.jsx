import logo1 from "../../Assets/images/logo-1.png"
import "../../Assets/css/CenterForm.css"
import circle2 from "../../Assets/images/gp-1.png"
import MyForm from "./inner-component/form"

const CenterForm =()=>{

    return(
        <>
            <div className="CenterForm">
                <div>
                <MyForm/>
                </div>
                <div className="brand-logo">
                <img src={logo1} className="bird" alt="Logo" />
                <img src={circle2} className="ecclips" alt="Logo" />
                
                </div>
            </div>
        </>
    )
}

export default CenterForm