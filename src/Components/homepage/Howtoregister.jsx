import "../../Assets/css/Howtoregister.css";
import one from "../../Assets/images/one.svg";
import two from "../../Assets/images/two.svg";
import three from "../../Assets/images/three.svg";
import one1 from "../../Assets/images/one.png";
import two2 from "../../Assets/images/two.png";
import three3 from "../../Assets/images/three.png";
import Starhr from "../../Assets/images/Starhr.svg";
// import awardback from "../../Assets/images/awardback.png";
import awardpic from "../../Assets/images/award.png";

//   <img src={awardback} className="awardback" width="263px" height="479px" alt="awardpic" />
const Howtoregister = () => {
  return (
    <>
      <div className="How-container" id="register">
        <div className="HOW-Heading">
          <span>HOW TO REGISTER</span>
        </div>

        <div className="how-process">
          <div className="how-card">
            <img src={one} alt="one" />
            <img src={one1} alt="one" />
            <span>Register on the website with a valid email & mobile no.</span>
          </div>
          <div className="how-card">
            <img src={two} alt="one" />
            <img src={two2} alt="one" />
            <span>Submit your research paper before the deadline.</span>
          </div>
          <div className="how-card">
            <img src={three} alt="one" />
            <img src={three3} alt="one" />
            <span>
              Wait for the results to get announced. You will be notified.
            </span>
          </div>
        </div>

        <div className="hr-with-image-1">
          <hr className="main-hr-1" />
          <img src={Starhr} className="starthr" alt="start" />
        </div>
        <div className="HOW-Heading" id="rules">
          <span>RULES & REWARDS</span>
        </div>
        <div className="rule-center">
          <div className="div-1">
            <img src={awardpic} className="awardpic" alt="awardpic" />
          </div>
          <div className="div-1">
            <div>
              <span className="heading">RULES</span>
              <ul>
                <li>
                  Visit our website and click on the Sikka award registration
                  button
                </li>
                <li>
                  {" "}
                  Fill out the online registration form with your personal and
                  professional details.
                </li>
                <li>
                  Submit an original research paper study on one of the
                  following topics: Climate change, Monsoon dynamics, Monsoon
                  prediction, Cyclones, or Satellite meteorology.
                </li>
                <li>
                  Ensure that the first and corresponding author of the paper is
                  under 40 years of age.
                </li>
              </ul>
            </div>
            <div>
              <span className="heading">REWARDS</span>
              <ul>
                <li style={{"listStyle":"none"}}>
                  The winner will receive the Skymet Sikka Award Trophy and a
                  prize money of Rs. 1,00,000/-.
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Howtoregister;
