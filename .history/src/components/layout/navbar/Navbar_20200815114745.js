import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <ul class="right move_words_up">
            <li>
              <i class="fas fa-home"></i>
            </li>
            <li>
              <i class="far fa-paper-plane"></i>
            </li>
            <li>
              <i class="far fa-compass"></i>
            </li>
            <li>
              <i class="far fa-heart"></i>
            </li>
            <li>
              <a href="collapsible.html">JavaScript</a>
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

export default Navbar;
