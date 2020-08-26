import React, { Component } from "react";
import "./ProfileSlide.css";
import Slider from "react-slick";

export default class ProfileSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
      slidesToScroll: 3,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1597589827317-4c6d6e0a90bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1000&q=80"
              alt="img"
              className="images"
            />
            <p className="move_name_left">Perception</p>
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1595798169907-e80df93fc5a2?ixlib=rb-1.2.1&auto=format&fit=crop&w=966&q=80"
              alt="img"
              className="images"
            />
            <p className="move_name_left">Pictures</p>
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1589149098258-3e9102cd63d3?ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
              alt="img"
              className="images"
            />
            <p className="move_name_left">About me</p>
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1580584126903-c17d41830450?ixlib=rb-1.2.1&auto=format&fit=crop&w=937&q=80"
              alt="img"
              className="images"
            />
            <p className="move_name_left">Promos</p>
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1593376853899-fbb47a057fa0?ixlib=rb-1.2.1&auto=format&fit=crop&w=958&q=80"
              alt="img"
              className="images"
            />
            <p className="move_name_left">Metronome</p>
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1593377202145-c5e97fd065f4?ixlib=rb-1.2.1&auto=format&fit=crop&w=933&q=80"
              alt="img"
              className="images"
            />
            <p className="move_name_left">Videos</p>
          </div>
          <div className="move_images_apart">
            <img
              src="https://images.unsplash.com/photo-1535378620166-273708d44e4c?ixlib=rb-1.2.1&auto=format&fit=crop&w=866&q=80"
              alt="img"
              className="images"
            />
            <p className="move_name_left">Memes</p>
          </div>
        </Slider>
      </div>
    );
  }
}
