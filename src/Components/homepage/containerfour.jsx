import "../../Assets/css/Four.css";
import BasicModal from "./inner-component/popup.jsx";
import React from "react";
import Yogesh from "../../Assets/images/Yogesh.jpg";
import Makarand from "../../Assets/images/Makarand.jpg";
import Jatin from "../../Assets/images/Jatin.jpg";
import AVM from "../../Assets/images/AVM.jpg";

const FourContainer = () => {
  const [title, settitle] = React.useState("");
  const [discription, setdiscription] = React.useState("");
  const [img, setimg] = React.useState("");

  const [open, setOpen] = React.useState(false);
  const handleOpen = (t, d, img) => {
    settitle(t);
    setimg(img);
    setdiscription(d);
    setOpen(true);
  };
  const handleClose = () => setOpen(false);

  return (
    <>
      <div className="four-container" id="jury">
        <div>
          <div className="four-heading">
            <span>JURY</span>
          </div>

          <div
            id="carouselExampleIndicators1"
            class="carousel slide"
            data-ride="carousel"
          >
            <ol class="carousel-indicators">
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="0"
                class="active"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="1"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="2"
              ></li>
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="3"
              ></li>
            </ol>
            <div class="carousel-inner">
              <div class="carousel-item active">
                <div className="jury-card">
                  <img src={Jatin} alt="not found" />
                  <br />
                  <span>Jatin Singh</span>
                  <p>
                    The Founder & Managing Director at Skymet Weather Services
                    Pvt Ltd, he is in charge of the overall growth strategy of
                    the company, technology innovation, operations and business
                    dimensions. Prior to becoming an entrepreneur, Jatin was
                    associated with TV Today Group as an Assistant Producer and
                    anchor...
                  </p>
                  <div
                    className="read-more"
                    onClick={() =>
                      handleOpen(
                        "Jatin Singh",
                        "The Founder & Managing Director at Skymet Weather Services Pvt Ltd, he is in charge of the overall growth strategy of the company, technology innovation, operations and business dimensions. Prior to becoming an entrepreneur, Jatin was associated with TV Today Group as an Assistant Producer and anchor. Before joining the group, he was a reporter with ANI/Reuters handling multiple verticals such as National Broadcasting Corporation (New Delhi and Jammu & Kashmir) and a news bulletin carried in the United States, the South Asian Newsline. He was also an Associate Producer for the Singapore-based 24-hour news network Channel News Asia.",
                        Jatin
                      )
                    }
                  >
                    Read More
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="jury-card">
                  <img src={Yogesh} alt="not found" />
                  <br />
                  <span>Yogesh Patil</span>
                  <p>
                    A meteorology and weather instrumentation expert, balanced
                    by understanding risk to create opportunities and articulate
                    ways to best leverage weather information across multiple
                    platforms. He is an engineer by training, followed by
                    studies in management and more than 14 years of
                    experience...
                  </p>
                  <div
                    className="read-more"
                    onClick={() =>
                      handleOpen(
                        "Yogesh Patil",
                        "A meteorology and weather instrumentation expert, balanced by understanding risk to create opportunities and articulate ways to best leverage weather information across multiple platforms. He is an engineer by training, followed by studies in management and more than 14 years of experience",
                        Yogesh
                      )
                    }
                  >
                    Read More
                  </div>
                </div>
              </div>
              <div class="carousel-item">
                <div className="jury-card">
                  <img src={Makarand} alt="not found" />
                  <br />
                  <span>Makarand Kulkarni</span>
                  <p>
                    A veteran and a visionary in agri-weather risk management,
                    Makarand Kulkarni is leading the development of cutting-edge
                    technology as the Chief Product Planning & Quality at Skymet
                    Weather Services Pvt Ltd. Armed with nearly three decades of
                    extensive research and expertise in predictive analysis,...
                  </p>
                  <div
                    className="read-more"
                    onClick={() =>
                      handleOpen(
                        "Makarand Kulkarni",
                        "A veteran and a visionary in agri-weather risk management, Makarand Kulkarni is leading the development of cutting-edge technology as the Chief Product Planning & Quality at Skymet Weather Services Pvt Ltd. Armed with nearly three decades of extensive research and expertise in predictive analysis,",
                        Makarand
                      )
                    }
                  >
                    Read More
                  </div>
                </div>
              </div>

              <div class="carousel-item">
                <div className="jury-card">
                  <img src={AVM} alt="not found" />
                  <br />
                  <span>AVM GP Sharma</span>
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry's
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. Lorem Ipsum is simply dummy text of the
                    printing and typesetting industry...
                  </p>
                  <div
                    className="read-more"
                    onClick={() =>
                      handleOpen(
                        "AVM GP Sharma",
                        "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. Lorem Ipsum is simply dummy text of the printing and typesetting industry",
                        AVM
                      )
                    }
                  >
                    Read More
                  </div>
                </div>
              </div>
            </div>
            <a
              class="carousel-control-prev"
              href="#carouselExampleIndicators1"
              role="button"
              data-slide="prev"
            >
              <span
                class="carousel-control-prev-icon"
                aria-hidden="true"
                id="jury-prev"
              ></span>
              <span class="sr-only">Previous</span>
            </a>
            <a
              class="carousel-control-next"
              href="#carouselExampleIndicators1"
              role="button"
              data-slide="next"
            >
              <span
                class="carousel-control-next-icon"
                aria-hidden="true"
                id="jury-next"
              ></span>
              <span class="sr-only danger">Next</span>
            </a>
          </div>

          <div className="jury-container">
            <div className="jury-inner">
              <div className="jury-card">
                <img src={Jatin} alt="not found" />
                <br />
                <span>Jatin Singh</span>
                <p>
                  The Founder & Managing Director at Skymet Weather Services Pvt
                  Ltd, he is in charge of the overall growth strategy of the
                  company, technology innovation, operations and business
                  dimensions. Prior to becoming an entrepreneur, Jatin was
                  associated with TV Today Group as an Assistant Producer and
                  anchor...
                </p>
                <div
                  className="read-more"
                  onClick={() =>
                    handleOpen(
                      "Jatin Singh",
                      "The Founder & Managing Director at Skymet Weather Services Pvt Ltd, he is in charge of the overall growth strategy of the company, technology innovation, operations and business dimensions. Prior to becoming an entrepreneur, Jatin was associated with TV Today Group as an Assistant Producer and anchor. Before joining the group, he was a reporter with ANI/Reuters handling multiple verticals such as National Broadcasting Corporation (New Delhi and Jammu & Kashmir) and a news bulletin carried in the United States, the South Asian Newsline. He was also an Associate Producer for the Singapore-based 24-hour news network Channel News Asia.",
                      Jatin
                    )
                  }
                >
                  Read More
                </div>
              </div>
              <div className="jury-card">
                <img src={Yogesh} alt="not found" />
                <br />
                <span>Yogesh Patil</span>
                <p>
                  A meteorology and weather instrumentation expert, balanced by
                  understanding risk to create opportunities and articulate ways
                  to best leverage weather information across multiple
                  platforms. He is an engineer by training, followed by studies
                  in management and more than 14 years of experience...
                </p>
                <div
                  className="read-more"
                  onClick={() =>
                    handleOpen(
                      "Yogesh Patil",
                      "A meteorology and weather instrumentation expert, balanced by understanding risk to create opportunities and articulate ways to best leverage weather information across multiple platforms. He is an engineer by training, followed by studies in management and more than 14 years of experience",
                      Yogesh
                    )
                  }
                >
                  Read More
                </div>
              </div>
            </div>
            <div className="jury-inner">
              <div className="jury-card">
                <img src={Makarand} alt="not found" />
                <br />
                <span>Makarand Kulkarni</span>
                <p>
                  A veteran and a visionary in agri-weather risk management,
                  Makarand Kulkarni is leading the development of cutting-edge
                  technology as the Chief Product Planning & Quality at Skymet
                  Weather Services Pvt Ltd. Armed with nearly three decades of
                  extensive research and expertise in predictive analysis,...
                </p>
                <div
                  className="read-more"
                  onClick={() =>
                    handleOpen(
                      "Makarand Kulkarni",
                      "A veteran and a visionary in agri-weather risk management, Makarand Kulkarni is leading the development of cutting-edge technology as the Chief Product Planning & Quality at Skymet Weather Services Pvt Ltd. Armed with nearly three decades of extensive research and expertise in predictive analysis,",
                      Makarand
                    )
                  }
                >
                  Read More
                </div>
              </div>
              <div className="jury-card">
                <img src={AVM} alt="not found" />
                <br />
                <span>AVM GP Sharma</span>
                <p>
                  Mr Sharma, President of Metrology & Climate Change, Skymet
                  Weather Services, he is a retired India Airforce Officer and
                  headed the metrological branch while serving at Air
                  Headquarters, New Delhi. He has been at Skymet for nearly 10
                  years.​
                </p>
                <div
                  className="read-more"
                  onClick={() =>
                    handleOpen(
                      "AVM GP Sharma",
                      "Mr Sharma, President of Metrology & Climate Change, Skymet Weather Services, he is a retired India Airforce Officer and headed the metrological branch while serving at Air Headquarters, New Delhi. He has been at Skymet for nearly 10 years.​",
                      AVM
                    )
                  }
                >
                  Read More
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {open ? (
        <BasicModal
          title={title}
          img={img}
          discription={discription}
          handleOpen={handleOpen}
          open={open}
          handleClose={handleClose}
        />
      ) : (
        ""
      )}
    </>
  );
};

export default FourContainer;
