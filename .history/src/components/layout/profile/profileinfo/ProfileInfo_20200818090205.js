import React, { Component } from "react";

export class ProfileInfo extends Component {
  render() {
    return (
      <div className="left move_from_edge">
        <h6>
          <b>Asaph Franks ✞ Pianist</b>
        </h6>
        <ul className="move_list_item">
          <li>•Jeremiah 29:11❤</li>
          <li>
            <span role="img" aria-label="emoji">
              •19🙌🍃
            </span>{" "}
          </li>
          <li>
            •I post when I wanna{" "}
            <span role="img" aria-label="emoji">
              😆🎹
            </span>{" "}
          </li>
          <li>
            •Art account:{" "}
            <a href="https://www.instagram.com/nocturnal_pencil/">
              @nocturnal_pencil
            </a>{" "}
            ✏
          </li>
          <li>•YouTube channel:⬇</li>
          <a href="www.youtube.com/channel/UCT5Rdz2WqDpsPlt-BA0pVhg">
            <b>www.youtube.com/channel/UCT5Rdz2WqDpsPlt-BA0pVhg</b>
          </a>

          <li></li>
        </ul>
      </div>
    );
  }
}

export default ProfileInfo;
