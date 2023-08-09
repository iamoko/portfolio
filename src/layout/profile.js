import React from "react";
import Carousel from "../components/carousel/carousel";
import _ from "lodash";

function Profile() {
  const images = [
    "https://www.w3schools.com/howto/img_snow_wide.jpg",
    "https://www.w3schools.com/howto/img_woods_wide.jpg",
    "https://www.w3schools.com/howto/img_lights_wide.jpg",
  ];
  return (
    <div
      className="relative z-10 w-full overflow-hidden border-black rounded-md main"
      style={{ boxShadow: "rgba(0, 0, 0, 0.15) 2.4px 2.4px 3.2px" }}
    >
      <div className="h-[80%]">
        <Carousel>
          {_.map(images, (img, i) => (
            <div>
              <img key={i} src={img} alt="img1" className="object-cover" />
            </div>
          ))}
        </Carousel>
      </div>

      <div className="absolute top-[40%] ml-[-50%] rounded-t-full  h-[500px] main w-[200%] ">
        <p>dfghj</p>
      </div>
    </div>
  );
}

export default Profile;
