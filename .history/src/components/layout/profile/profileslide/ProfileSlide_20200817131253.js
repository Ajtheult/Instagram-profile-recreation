import React, { Component } from "react";
import Slider from "react-slick";
import "./ProfileSlide.css";

export default class ProfileSlider extends Component {
  render() {
    const settings = {
      infinite: true,
      speed: 500,
      slidesToShow: 5,
    };
    return (
      <div className="container">
        <Slider {...settings}>
          <div>
            <h3>1</h3>
          </div>
          <div>
            <h3>2</h3>
          </div>
          <div>
            <h3>3</h3>
          </div>
          <div>
            <h3>4</h3>
          </div>
          <div>
            <h3>5</h3>
          </div>
          <div>
            <h3>6</h3>
          </div>
          <div>
            <h3>7</h3>
          </div>
          <div>
            <h3>8</h3>
          </div>
          <div>
            <h3>9</h3>
          </div>
          <div>
            <h3>10</h3>
          </div>
        </Slider>
      </div>
    );
  }
}
