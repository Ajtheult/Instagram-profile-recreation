import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div>
      <div class="row border_of_stats">
        <div class="col s4">
          <h6>?</h6>
          <p className="heading_colour">posts</p>
        </div>
        <div class="col s4">
          <h6>?</h6>
          <p className="heading_colour">followers</p>
        </div>
        <div class="col s4">
          <h6>?</h6>
          <p className="heading_colour">following</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
