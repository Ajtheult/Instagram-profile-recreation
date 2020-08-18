import React, { Component } from "react";
import Slider from "react-slick";

export default class ProfileSlide extends Component {
  render() {
    const settings = {
      dots: true,

      speed: 500,
      slidesToShow: 6,
    };
    return (
      <div className="container">
        <p> Single Item</p>
        <Slider {...settings}>
          <ul>
            <li>1</li>
            <li>2</li>
            <li>3</li>
            <li>4</li>
            <li>5</li>
            <li>6</li>
            <li>7</li>
          </ul>
        </Slider>
      </div>
    );
  }
}
