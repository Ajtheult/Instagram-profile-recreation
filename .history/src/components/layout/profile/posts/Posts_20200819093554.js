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
      <div className="container">
        <div className="bg-color">
          {/* <img src={background2} className="bg" alt="bg" /> */}
        </div>
        {posts.map((posts, idx) => (
          <div key={idx}>
            <div class="row decrease_container_size">
              <div class="col s12  ">
                {" "}
                <div class="card-panel white">
                  <h5 class="black-text move_the_name">{posts.picture}</h5>
                  <span class="black-text enlarge_paragraph">
                    {posts.testimonial}
                  </span>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Posts;
