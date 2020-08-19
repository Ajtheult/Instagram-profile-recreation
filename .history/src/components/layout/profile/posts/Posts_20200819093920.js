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
            <div class="col s6">6-columns (one-half)</div>
            <div class="col s6">6-columns (one-half)</div>
            <div class="col s6">6-columns (one-half)</div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Posts;
