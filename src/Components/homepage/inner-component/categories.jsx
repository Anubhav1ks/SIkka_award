import "../../../Assets/css/catagory.css";
import c1 from "../../../Assets/images/c1.png"
import c2 from "../../../Assets/images/c2.png"
import c3 from "../../../Assets/images/c3.png"
import c4 from "../../../Assets/images/c4.png"
import c5 from "../../../Assets/images/c5.png"


const Categories = () => {
    return (
        <>
            <div className="categories-div">
                <div className="heading">
                    <span>CATEGORIES</span>
                </div>
                <div className="card-div">
                    <div className="div-cat-1">
                        <div className="Card-categories">
                            <img src={c1} alt="not found"/> 
                            <br/> 
                            <span>CLIMATE CHANGE</span>       
                            <p>Studying the impact of climate change on the Indian Meteorology system is essential in understanding the changing patterns and trends of weather, precipitation and temperature and how they will affect the region. This knowledge can inform decision-making on a local, regional and global scale to mitigate the effects of climate change and create more sustainable communities.</p>                   
                        </div>
                        <div className="Card-categories">
                                <img src={c2} alt="not found"/>
                                <br/>
                                <span>MONSOON DYNAMICS</span>
                                <p>Understanding the complex dynamics of the monsoon is crucial in predicting and preparing for its impacts. Advances in the study of monsoon dynamics can lead to improved forecasts and provide decision-makers with the information they need to mitigate the effects of heavy rain and flooding effectively</p>
                        </div>
                        <div className="Card-categories">
                                <img src={c3} alt="not found"/>
                                <br/>
                                <span>SATELLITE IMAGERY</span>
                                <p>The use of satellite imagery in the study of Indian Meteorology is crucial in providing comprehensive data on weather patterns and trends. With this information, scientists and meteorologists can improve their understanding of the Indian Meteorology system and develop more effective strategies to mitigate the impacts of global warming and climate change.</p>
                        </div>
                    </div>
                    <div className="div-cat-1">
                        <div className="Card-categories">
                                <img src={c4} alt="not found"/>
                                <br/>
                                <span>CYCLONES</span>
                                <p>Studying and understanding cyclones is crucial in predicting their formation, track and intensity. Improved predictions can lead to more effective disaster response and risk reduction strategies, helping to save lives and minimize damage.</p>
                        </div>
                        <div className="Card-categories">
                            <img src={c5} alt="not found"/> 
                            <br/>
                            <span>MONSOON PREDICTION</span>       
                            <p>Accurate and reliable monsoon forecasts are essential in preparing for and responding to the impacts of heavy rain and flooding. The study of monsoon prediction plays a critical role in reducing the damage caused by extreme weather events and ensuring the safety of communities.</p>                    
                        </div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Categories;