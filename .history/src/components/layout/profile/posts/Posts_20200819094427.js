/* eslint-disable jsx-a11y/alt-text */
import React, { useState } from "react";
import NavPosts from "../postnav/NavPosts";
import "./Posts.css";
export const Posts = () => {
  const [posts] = useState([
    {
      picture: "Godwin P edzisai Dzvapatsva (Head of Curriculum and Learning)",
    },
  ]);
  return (
    <div>
      <NavPosts />
      {posts.map((posts, idx) => (
        <div key={idx}>
          <div class="row">
            <div class="col s4">
              {" "}
              <div class="card">
                <div class="card-image">
                  <img src="images/sample-1.jpg" />
                  <span class="card-title">Card Title</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
