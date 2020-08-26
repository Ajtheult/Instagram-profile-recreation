import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import "./App.css";
import PictureSection from "./components/layout/profile/PictureSection";
import ProfileInfo from "./components/layout/profile/profileinfo/ProfileInfo";
import ProfileSlide from "./components/layout/profile/profileslide/ProfileSlide";
import Stats from "./components/layout/profile/stats/Stats";
import Posts from "./components/layout/profile/posts/Posts";

import Igtv from "./components/layout/profile/igtv/Igtv";
import Tags from "./components/layout/profile/tags/Tags";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import NavPosts from "./components/layout/profile/postnav/NavPosts";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <PictureSection />
        <ProfileInfo />
        <ProfileSlide />
        <Stats />
        <NavPosts />
        <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route path="/igtv" component={Igtv} />
          <Route path="/tags" component={Tags} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
