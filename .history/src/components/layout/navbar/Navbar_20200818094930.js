import React, { Component } from "react";
import "./Navbar.css";
export class Navbar extends Component {
  render() {
    return (
      <nav className="white insta_navbar ">
        <h6 className="instagram_nav">Instagram</h6>
        <div>
          <ul className="move_words_up right">
            <li>
              <i className="fas fa-home home_icon"></i>
            </li>
            <li>
              <i className="far fa-paper-plane plane_icon"></i>
            </li>
            <li>
              <i className="far fa-compass compass_icon"></i>
            </li>
            <li>
              <i className="far fa-heart heart_icon"></i>
            </li>
            <li>
              <img
                src="https://scontent.fcpt7-1.fna.fbcdn.net/v/t1.0-9/101564649_895384727605799_2350072835830972416_n.jpg?_nc_cat=109&_nc_sid=09cbfe&_nc_ohc=8GYF-xoq6r4AX_T4Qd1&_nc_ht=scontent.fcpt7-1.fna&oh=f9fb43a7194d4ca48be818e71eb59fa7&oe=5F5E670D"
                alt="img"
                className="image_of_self_on_nav image_icon"
              />
            </li>
          </ul>
        </div>
      </nav>
    );
  }
}

// Add search bar
export default Navbar;
