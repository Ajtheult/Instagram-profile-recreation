import React from "react";
import "./App.css";
import PictureSection from "./components/layout/profile/PictureSection";
import ProfileInfo from "./components/layout/profile/profileinfo/ProfileInfo";
import ProfileSlide from "./components/layout/profile/profileslide/ProfileSlide";

function App() {
  return (
    <div className="App">
      <PictureSection />
      <ProfileInfo />
      <ProfileSlide />
    </div>
  );
}

export default App;
