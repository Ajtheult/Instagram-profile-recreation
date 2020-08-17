import React from "react";
import Navbar from "./components/layout/navbar/Navbar";
import "./App.css";
import PictureSection from "./components/layout/profile/PictureSection";

function App() {
  return (
    <div className="App">
      <Navbar />
      <PictureSection />
    </div>
  );
}

export default App;
