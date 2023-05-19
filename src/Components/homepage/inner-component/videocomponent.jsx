import React, { useState } from "react";
import video from "../../../Assets/images/video.mp4";
import thumimage from "../../../Assets/images/thumimg.png"
const SectionVideo = (props) => {
  const [loading, setLoading] = useState(false);

  // setVideoUrl("https://www.youtube.com/watch?v=EkCxl2BwH4w&t=361s&pp=ygUMc2t5bWV0IHNpa2th")

  return (
    <>
      {!loading ? (
        <div className="watchvideo" onClick={() => setLoading(true)}>
          <img
            src={thumimage}
            alt="showreel"
          />
          <div className="redbutton">
            <a href="#play-video" id="play-video" className="videoplaybutton">
              <span></span>
            </a>
          </div>
        </div>
      ) : (
        <div id="top-sliders" className="bannerHolder ">
          {video !== "" && (
            <video
              id="videoBanner"
              autoPlay
              loop={false}
              playsInline={true}
              className="video"
              onClick={() => setLoading(false)}
              controls
            >
              <source src={video} type="video/mp4" />
            </video>
          )}
        </div>
      )}
    </>
  );
};

export default SectionVideo;
