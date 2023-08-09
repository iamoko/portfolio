import React from "react";
import Carousel from "../components/carousel/carousel";

function Profile() {
  return (
    <div
      className="z-10 w-full overflow-hidden border-black rounded-md main"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
    >
      <div className="h-1/2">
        <Carousel>
          <div>
            <img
              src="https://www.w3schools.com/howto/img_snow_wide.jpg"
              alt="img1"
            />
          </div>
          <div>
            <img
              src="https://www.w3schools.com/howto/img_woods_wide.jpg"
              alt="img2"
            />
          </div>
          <div>
            <img
              src="https://www.w3schools.com/howto/img_lights_wide.jpg"
              alt="img3"
            />
          </div>
        </Carousel>
        {/* <img
          src={"https://clipart-library.com/images/kiMKppb4T.jpg"}
          alt="cover"
          className="object-cover w-full h-full"
        /> */}
      </div>
    </div>
  );
}

export default Profile;
