import React, { useState } from "react";
import background from "../../assets/img/bgg.png";
const MainImage = () => {
  const [checkUser, setCheckUser] = useState(false);
  return (
    <>
      <div>
        <section class="main1">
          <div class="text">
            <h1>
              GET THE RIGHT
              <br />
              FLOW OF MUSIC
            </h1>
            <h4>Enjoy the exceptional quality in all our Products</h4>
          </div>
          <div class="main-bg">
            <img src={background} alt="" />
          </div>
        </section>
      </div>
    </>
  );
};

export default MainImage;
