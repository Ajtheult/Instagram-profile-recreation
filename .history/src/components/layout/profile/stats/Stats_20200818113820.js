import React from "react";
import "./Stats.css";

const Stats = () => {
  return (
    <div>
      <div class="row border_of_stats">
        <div class="col s4">
          <h6>1</h6>
          <p>posts</p>
        </div>
        <div class="col s4">
          <h6>2</h6>
          <p>followers</p>
        </div>
        <div class="col s4">
          <h6>3</h6>
          <p>following</p>
        </div>
      </div>
    </div>
  );
};

export default Stats;
