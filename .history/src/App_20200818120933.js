import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import "./App.css";
import PictureSection from "./components/layout/profile/PictureSection";
import ProfileInfo from "./components/layout/profile/profileinfo/ProfileInfo";
import ProfileSlide from "./components/layout/profile/profileslide/ProfileSlide";
import Stats from "./components/layout/profile/stats/Stats";
import Posts from "./components/layout/profile/posts/Posts";
import { Router } from "react-router-dom";

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
      </div>
    </Router>
  );
}

export default App;
