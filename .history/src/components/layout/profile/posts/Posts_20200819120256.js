import React from "react";
import NavPosts from "../postnav/NavPosts";
import num1 from "../../resources/1.jpg";
import num2 from "../../resources/2.jpg";
import num3 from "../../resources/3.jpg";
import num4 from "../../resources/4.jpg";
import num5 from "../../resources/5.jpg";
import num6 from "../../resources/6.jpg";
import num7 from "../../resources/7.jpg";

import "./Posts.css";
export const Posts = () => {
  return (
    <div>
      <NavPosts />
      <div className="row row_size">
        <div className="col s4 ">
          <img src={num1} className="size_of_img" alt="img" />
        </div>
        <div className="col s4 ">
          <img src={num2} className="size_of_img" alt="img" />
        </div>
        <div className="col s4 ">
          <img src={num3} className="size_of_img" alt="img" />
        </div>
        <div className="col s4 ">
          <img src={num4} className="size_of_img" alt="img" />
        </div>
        <div className="col s4 ">
          <img src={num5} className="size_of_img" alt="img" />
        </div>
        <div className="col s4 ">
          <img src={num6} className="size_of_img" alt="img" />
        </div>
        <div className="col s4 ">
          <img src={num7} className="size_of_img" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
