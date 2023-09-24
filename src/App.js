import React, { useState } from "react";
import "./App.css"; // Or wherever your Nightfly-inspired CSS is located
import GideonsReading from "./bible/gideonsreading.js";
import BibleReader from "./bible/showbiblefrom3.js";
import Memorizer from "./bible/memorizer.js";
function App() {
  const [activeComponent, setActiveComponent] = useState("GideonsReading");

  return (
    <div className="app-container">
      <div className="nav-container">
        <button
          onClick={() => setActiveComponent("GideonsReading")}
          className={activeComponent === "GideonsReading" ? "active" : ""}
        >
          Gideons Reading on the date
        </button>
        <button
          onClick={() => setActiveComponent("BibleReader")}
          className={activeComponent === "BibleReader" ? "active" : ""}
        >
          Bible Reader
        </button>
        <button
          onClick={() => setActiveComponent("Memorizer")}
          className={activeComponent === "Memorizer" ? "active" : ""}
        >
          Memorizer
        </button>
      </div>

      {activeComponent === "GideonsReading" && <GideonsReading />}
      {activeComponent === "BibleReader" && <BibleReader />}
      {activeComponent === "Memorizer" && <Memorizer />}
    </div>
  );
}

export default App;
