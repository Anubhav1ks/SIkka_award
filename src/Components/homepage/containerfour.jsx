import "../../Assets/css/Four.css";
import jury from "../../Assets/images/jury.png";
const FourContainer = () => {
  return (
    <>
      <div className="four-container">
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
              <li
                data-target="#carouselExampleIndicators"
                data-slide-to="4"
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
              <span class="sr-only danger" >Next</span>
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
            </div>
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
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default FourContainer;
