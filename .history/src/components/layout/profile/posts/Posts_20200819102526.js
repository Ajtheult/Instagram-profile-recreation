import React from "react";
import NavPosts from "../postnav/NavPosts";
import "./Posts.css";
export const Posts = () => {
  return (
    <div>
      <NavPosts />
      <div class="row row_size">
        <div class="col s4 ">
          <img
            src="https://images.unsplash.com/photo-1597722262325-d630c029ce43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="size_of_img"
            alt="img"
          />
        </div>
        <div class="col s4 ">
          <img
            src="https://images.unsplash.com/photo-1597722262325-d630c029ce43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="size_of_img"
            alt="img"
          />
        </div>
        <div class="col s4 ">
          <img
            src="https://images.unsplash.com/photo-1597722262325-d630c029ce43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="size_of_img"
            alt="img"
          />
        </div>
        <div class="col s4 ">
          <img
            src="https://images.unsplash.com/photo-1597722262325-d630c029ce43?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60"
            class="size_of_img"
            alt="img"
          />
        </div>
      </div>
    </div>
  );
};

export default Posts;
