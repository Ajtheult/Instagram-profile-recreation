import React, { Component } from "react";
import Slider from "react-slick";
import "./ProfileInfo.css";

export class ProfileInfo extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
    };
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
        </ul>
        <h6 className="make_blank"> Single Item</h6>
        <Slider {...settings}>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              alt="img"
              className="images"
            />
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1595798169907-e80df93fc5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
              alt="img"
              className="images"
            />
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
              alt="img"
              className="images"
            />
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
              alt="img"
              className="images"
            />
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
              alt="img"
              className="images"
            />
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1593377202145-c5e97fd065f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
              alt="img"
              className="images"
            />
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=866&q=80"
              alt="img"
              className="images"
            />
          </div>
        </Slider>
      </div>
    );
  }
}

export default ProfileInfo;
