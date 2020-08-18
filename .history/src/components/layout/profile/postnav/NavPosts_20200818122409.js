import React from "react";
import { Link } from "react-router-dom";
import "./NavPosts.css";

const NavPosts = () => {
  return (
    <div>
      <nav class="nav-extended">
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <Link to="/posts">
                <span class="material-icons">grid_on</span>
              </Link>
            </li>
            <li class="tab">
              <Link to="/igtv">
                <span class="material-icons">tv</span>
              </Link>
            </li>
            <li class="tab">
              <Link to="/saves">
                <span class="material-icons">turned_in_not</span>
              </Link>
            </li>
            <li class="tab">
              <Link to="/tags">
                <span class="material-icons">assignment_ind</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavPosts;
