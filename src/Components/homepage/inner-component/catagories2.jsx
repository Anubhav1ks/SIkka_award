import "../../../Assets/css/catagory.css";
import c3 from "../../../Assets/images/SK.png";

const Category = () => {
  return (
    <>
      <div className="categories-div" id="categories">
        <div className="heading">
          <span>CATEGORIES</span>
        </div>
        <div className="new-main">

          <img src={c3} className="" style={{"width":"100%"}} alt="no data"/>
        </div>
      </div>
    </>
  );
};

export default Category;
