import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import "./App.css";
import PictureSection from "./components/layout/profile/PictureSection";
import ProfileInfo from "./components/layout/profile/profileinfo/ProfileInfo";
import ProfileSlide from "./components/layout/profile/profileslide/ProfileSlide";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PictureSection />
      <ProfileInfo />
      <div className="row">
        <ProfileSlide />
      </div>
    </div>
  );
}

export default App;
