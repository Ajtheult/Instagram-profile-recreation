import React, { useState } from "react";
import NavPosts from "../postnav/NavPosts";
import "./Posts.css";
export const Posts = () => {
  const [posts] = useState([
    {
      picture:
        "https://images.unsplash.com/photo-1597697503794-1b84c3f8796b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=900&q=60",
    },
  ]);
  return (
    <div>
      <NavPosts />
      {posts.map((posts, idx) => (
        <div key={idx}>
          <div class="row">
            <div class="col s4">
              <div class="card size_of_img">
                <img src={posts.picture} class="size_of_img" alt="img" />
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
