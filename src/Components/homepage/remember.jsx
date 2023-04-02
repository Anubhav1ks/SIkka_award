import img from "../../Assets/images/remember-img.png"
import rec from "../../Assets/images/remember-rec.svg"
import "../../Assets/css/remember.css"

const Remember=()=>{
    return(
        <>
            <div className="rec-main">
                <div className="heading">
                    <span>REMEMBERING THE MONSOON MAN & <br/>
THE FATHER OF INDIAN METHEROLOGY</span>
                </div>
                <div className="rec-center">
                    <div className="div-rec">
                        <p>Skymet Weather salutes the soul who made remarkable achievements in Indian meteorology. The man who took the stature of meteorology to new and unfathomable heights, Dev Raj Sikka, was undeniably the "Bhishma Pitamah of Indian Meteorology." With grave heart and utmost respect, Skymet Weather assiduously remembers the genius behind Indian Meteorology. Known as 'Monsoon Man,' Mr. Sikka was born on March 01, 1932, in Jhang Maghiana, which is now in Punjab, Pakistan and later migrated to India after the partition. Pursuing his passion for meteorology, Mr. Sikka did his Master of Science in Physical Chemistry from Agra University and joined Indian Meteorological Department in 1954. His contribution to the field of Indian Monsoon is beyond comparison as he had a pivotal role in various studies that included the correlation between the Indian Monsoon and El El Niño, Walker Circulation, extreme weather events and Monsoon studies conducted over the Indian Ocean.</p>
                    </div>
                    <div className="div-rec">
                    <img src={img} alt="not found"/>
                    <img src={rec} alt="not found"/>
                    </div>
                </div>
            </div>
        </>
    )
}


export default Remember;