import React from "react";
import NavPosts from "../postnav/NavPosts";
import num1 from "../../resources/1.jpg";
import num2 from "../../resources/2.jpg";
import num3 from "../../resources/3.jpg";
import num4 from "../../resources/4.jpg";

import "./Posts.css";
export const Posts = () => {
  return (
    <div>
      <NavPosts />
      <div class="row row_size">
        <div class="col s4 ">
          <img src={num1} class="size_of_img" alt="img" />
        </div>
        <div class="col s4 ">
          <img src={num2} class="size_of_img" alt="img" />
        </div>
        <div class="col s4 ">
          <img src={num3} class="size_of_img" alt="img" />
        </div>
        <div class="col s4 ">
          <img src={num4} class="size_of_img" alt="img" />
        </div>
      </div>
    </div>
  );
};

export default Posts;
