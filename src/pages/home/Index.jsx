import Home from "../../Components/homepage";
import FourContainer from "../../Components/homepage/containerfour";
import FAQmain from "../../Components/homepage/fivecontainer";
import FooterMain from "../../Components/homepage/Footer-home";
import Categories from "../../Components/homepage/inner-component/categories";
import Centerpage from "../../Components/homepage/inner-component/centerpage";
import Starhr from "../../Assets/images/Starhr.svg";
import Howtoregister from "../../Components/homepage/Howtoregister";
import Remember from "../../Components/homepage/remember";
const HOMEPAGE = () => {
  return (
    <>
      <div className="main-container">
      <div className="background-img">
      <Home />
        <div>
        <Centerpage />
      </div>

        <div className="hr-with-image-1">
                    <hr className="main-hr-1" />
                    <img src={Starhr} className="starthr" alt="start" />
                </div>
        <Categories />

        </div>


        <div className="white-main">
          <Remember />
        </div>
        <Howtoregister />
        <div className="white-main">
          <FourContainer />
          <div className="hr-with-image">
            <hr className="main-hr" />
            <img src={Starhr} className="starthr" alt="start" />
          </div>
          {/* </hr> */}
          <FAQmain />
        </div>
        <FooterMain />

      </div>

    </>
  );
}

export default HOMEPAGE;