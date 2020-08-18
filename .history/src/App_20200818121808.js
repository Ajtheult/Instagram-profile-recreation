import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import "./App.css";
import PictureSection from "./components/layout/profile/PictureSection";
import ProfileInfo from "./components/layout/profile/profileinfo/ProfileInfo";
import ProfileSlide from "./components/layout/profile/profileslide/ProfileSlide";
import Stats from "./components/layout/profile/stats/Stats";
import Posts from "./components/layout/profile/posts/Posts";
import Saves from "./components/layout/profile/saves/Saves";
import Igtv from "./components/layout/profile/igtv/Igtv";
import Tags from "./components/layout/profile/tags/Tags";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <PictureSection />
        <ProfileInfo />
        <ProfileSlide />
        <Stats />
        <Posts />
        <Switch>
          <Route exact path="/posts" component={Posts} />
          <Route path="/igtv" component={Igtv} />
          <Route path="/saves" component={Saves} />
          <Route path="/tags" component={Tags} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
