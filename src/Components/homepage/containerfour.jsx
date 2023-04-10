import "../../Assets/css/Four.css";
import jury from "../../Assets/images/jury.png";
const FourContainer = () => {
  return (
    <>
      <div className="four-container" id="JURY">
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
                  <img src={jury} alt="not found" />
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
                  <a href="/">Read More</a>
                </div>
              </div>
              <div class="carousel-item">
                <div className="jury-card">
                  <img src={jury} alt="not found" />
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
                  <a href="/">Read More</a>
                </div>
              </div>
              <div class="carousel-item">
                <div className="jury-card">
                  <img src={jury} alt="not found" />
                  <br />
                  <span>Makarand Kulkarni</span>
                  <p>
                    A veteran and a visionary in agri-weather risk management,
                    Makarand Kulkarni is leading the development of cutting-edge
                    technology as the Chief Product Planning & Quality at Skymet
                    Weather Services Pvt Ltd. Armed with nearly three decades of
                    extensive research and expertise in predictive analysis,...
                  </p>
                  <a href="/">Read More</a>
                </div>
              </div>

              <div class="carousel-item">
                <div className="jury-card">
                  <img src={jury} alt="not found" />
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
                  <a href="/">Read More</a>
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
                <img src={jury} alt="not found" />
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
                <a href="/">Read More</a>
              </div>
              <div className="jury-card">
                <img src={jury} alt="not found" />
                <br />
                <span>Yogesh Patil</span>
                <p>
                  A meteorology and weather instrumentation expert, balanced by
                  understanding risk to create opportunities and articulate ways
                  to best leverage weather information across multiple
                  platforms. He is an engineer by training, followed by studies
                  in management and more than 14 years of experience...
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
            <div className="jury-inner">
              <div className="jury-card">
                <img src={jury} alt="not found" />
                <br />
                <span>Makarand Kulkarni</span>
                <p>
                  A veteran and a visionary in agri-weather risk management,
                  Makarand Kulkarni is leading the development of cutting-edge
                  technology as the Chief Product Planning & Quality at Skymet
                  Weather Services Pvt Ltd. Armed with nearly three decades of
                  extensive research and expertise in predictive analysis,...
                </p>
                <a href="/">Read More</a>
              </div>
              <div className="jury-card">
                <img src={jury} alt="not found" />
                <br />
                <span>AVM GP Sharma</span>
                <p>
                  Lorem Ipsum is simply dummy text of the printing and
                  typesetting industry. Lorem Ipsum has been the industry's
                  standard dummy text ever since the 1500s, when an unknown
                  printer took a galley of type and scrambled it to make a type
                  specimen book. Lorem Ipsum is simply dummy text of the
                  printing and typesetting industry...
                </p>
                <a href="/">Read More</a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourContainer;
