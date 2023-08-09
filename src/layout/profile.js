import React from "react";
import Carousel from "../components/carousel/carousel";
import _ from "lodash";

function Profile() {
  const images = [
    "https://images4.alphacoders.com/106/106508.jpg",
    "https://cdn.pixabay.com/photo/2018/01/14/23/12/nature-3082832_1280.jpg",
    "https://4kwallpapers.com/images/wallpapers/sunset-underwater--11436.jpg",
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
