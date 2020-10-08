import React from "react";
import "../css/sidebaroptions.css";
function SidebarOptions({ text, Icon }) {
  return (
    <div className="sidebarOptions">
      <Icon className="sidebarOptions__icon" />
      <h2>{text}</h2>
    </div>
  );
}

export default SidebarOptions;
