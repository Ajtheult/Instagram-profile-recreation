import React from "react";
import "./PictureSection.css";
const PictureSection = () => {
  return (
    <div className="picture_section">
      <div class="row">
        <div class="col s4">
          <img
            src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/101564649_895384727605799_2350072835830972416_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=8GYF-xoq6r4AX_T4Qd1&_nc_ht=scontent.fcpt7-1.fna&oh=f9fb43a7194d4ca48be818e71eb59fa7&oe=5F5E670D"
            alt="img"
            className="image_of_self image_icon"
          />
        </div>

        <div class="col s8">
          <div className="left">
            <h4 className="user_name">aj_the_ultimate</h4>
            <button class="waves-effect waves-light btn">button</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PictureSection;
