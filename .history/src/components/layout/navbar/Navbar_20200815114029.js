import React, { Component } from "react";

export class Navbar extends Component {
  render() {
    return (
      <nav>
        <div class="nav-wrapper">
          <ul class="right move_words_up">
            <li>
              <a href="sass.html">Sass</a>
            </li>
            <li>
              <a href="badges.html">Components</a>
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
