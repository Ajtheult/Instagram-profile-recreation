import React from "react";
import { Link } from "react-router-dom";
import "./NavPosts.css";

const NavPosts = () => {
  return (
    <div>
      <nav className="move_this_nav white">
        <div>
          <ul className="tabs tabs-transparent">
            <li className="tab">
              <Link to="/posts">
                <span className="material-icons">grid_on</span>
              </Link>
            </li>
            <li className="tab">
              <Link to="/igtv">
                <span className="material-icons">tv</span>
              </Link>
            </li>
            <li className="tab">
              <Link to="/tags">
                <span className="material-icons">assignment_ind</span>
              </Link>
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavPosts;
