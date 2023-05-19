import {useState} from 'react';
import Home from "../../Components/homepage";
import FourContainer from "../../Components/homepage/containerfour";
import FAQmain from "../../Components/homepage/fivecontainer";
import FooterMain from "../../Components/homepage/Footer-home";
import Categories from "../../Components/homepage/inner-component/categories";
import Centerpage from "../../Components/homepage/inner-component/centerpage";
import Starhr from "../../Assets/images/Starhr.svg";
import Howtoregister from "../../Components/homepage/Howtoregister";
import Remember from "../../Components/homepage/remember";


import Floatingbutton from "../../Components/homepage/Floatingbutton";
import { Helmet } from 'react-helmet';

const HOMEPAGE = () => {
  const [showBtn, setShowBtn] = useState(false);

    window.onscroll = function () {
    scrollFunction();
  };

  function scrollFunction() {
    if (
      document.body.scrollTop > 200 ||
      document.documentElement.scrollTop > 200
    ) {
      setShowBtn(true);
    } else {
      setShowBtn(false);
    }
  }
  return (
    <>
     <Helmet>‍
        <title>Skymet Sikka Meteorology Award 2023</title>
        <meta name="description" content=" The Sikka Meteorology Award 2023, presented by Skymet Weather, is a prestigious recognition honouring the legacy of Mr Dev Raj Sikka." />
        <meta property="og:title" content={"Skymet Sikka Meteorology Award 2023"}  />
        <meta property="og:description" content={" The Sikka Meteorology Award 2023, presented by Skymet Weather, is a prestigious recognition honouring the legacy of Mr Dev Raj Sikka."}  />
        <meta property="og:image" content="http://projects.skymetweather.com/SikkaAwards" />
        <meta property="og:url" content="https://projects.skymetweather.com/SikkaAwards/"/>
          <meta property="og:type" content="website"/>
 
        <meta name="twitter:card" content="summary_large_image" />
          <meta property="twitter:domain" content="projects.skymetweather.com" />
          <meta property="twitter:url" content="https://projects.skymetweather.com/SikkaAwards/" />
          <meta name="twitter:title" content="Skymet Sikka"/>
          <meta name="twitter:description" content="Web site created using create-react-app" />
          <meta name="twitter:image" content=""/>  
      </Helmet>

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
          <FAQmain />
        </div>
        <FooterMain />
        {
          showBtn? 
        <Floatingbutton/>
          :""
        }
      </div>

    </>
  );
}

export default HOMEPAGE;