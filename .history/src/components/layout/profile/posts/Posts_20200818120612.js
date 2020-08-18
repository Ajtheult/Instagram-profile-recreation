import React from "react";
import "./Posts.css";

const Posts = () => {
  return (
    <div>
      <nav class="nav-extended">
        <div class="nav-content">
          <ul class="tabs tabs-transparent">
            <li class="tab">
              <a href="#test1">
                <span class="material-icons">grid_on</span>
              </a>
            </li>
            <li class="tab">
              <a href="#test2">
                <span class="material-icons">tv</span>
              </a>
            </li>
            <li class="tab">
              <a href="#test3">
                <span class="material-icons">turned_in_not</span>
              </a>
            </li>
            <li class="tab">
              <a href="#test4">
                <span class="material-icons">assignment_ind</span>
              </a>
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
