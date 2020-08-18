import React from "react";
import { Link } from "react-router-dom";
import "./Posts.css";

const Posts = () => {
  return (
    <div>
      <nav class="nav-extended">
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <Link>
                <a href="#test1">
                  <span class="material-icons">grid_on</span>
                </a>
              </Link>
            </li>
            <li class="tab">
              <Link>
                <a href="#test2">
                  <span class="material-icons">tv</span>
                </a>
              </Link>
            </li>
            <li class="tab">
              <Link>
                <a href="#test3">
                  <span class="material-icons">turned_in_not</span>
                </a>
              </Link>
            </li>
            <li class="tab">
              <Link>
                <a href="#test4">
                  <span class="material-icons">assignment_ind</span>
                </a>
              </Link>
            </li>
          </ul>
        </div>
      </nav>

      <div id="test1" class="col s12">
        Test 1
      </div>
      <div id="test2" class="col s12">
        Test 2
      </div>
      <div id="test3" class="col s12">
        Test 3
      </div>
      <div id="test4" class="col s12">
        Test 4
      </div>
    </div>
  );
};

export default Posts;
