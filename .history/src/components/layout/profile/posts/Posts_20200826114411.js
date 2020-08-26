import React from "react";
import num1 from "../../resources/posts-1.jpg";
import num2 from "../../resources/posts-2.jpg";
import num3 from "../../resources/posts-3.jpg";
import num4 from "../../resources/posts-4.jpg";
import num5 from "../../resources/posts-5.jpg";
import num6 from "../../resources/posts-6.jpg";
import num7 from "../../resources/posts-7.jpg";
import num8 from "../../resources/posts-8.jpg";

import "./Posts.css";
export const Posts = () => {
  return (
    <div>
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
        <div className="col s4 ">
          <img src={num8} className="size_of_img" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
