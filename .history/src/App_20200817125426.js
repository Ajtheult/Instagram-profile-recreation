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
      <br />
      <ProfileSlide />
    </div>
  );
}

export default App;
