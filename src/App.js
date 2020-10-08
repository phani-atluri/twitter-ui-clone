import React from "react";
import "./App.css";
import Sidebar from "./components/Sidebar";
import Feed from "./components/Feed";
import Widget from "./components/Widget";

function App() {
  return (
    <div className="app">
      {/*SIdeBar*/}
      <Sidebar />
      {/*FEED*/}
      <Feed />
      {/*WIDGETS*/}
      <Widget />
    </div>
  );
}

export default App;
