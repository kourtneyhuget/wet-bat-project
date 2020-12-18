import React from "react";
import "../styles/DashboardGreeting.scss";

export function DashboardGreeting(props) {
  return (
    <div className="dashboard-greeting-container">
      <div className="h3-paragraph-container">
        <h1>Welcome to your dashboard</h1>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
          eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad
          minim veniam, quis nostrud exercitation ullamco laboris nisi ut
          aliquip ex ea commodo consequat. Duis aute irure dolor in
          reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla
          pariatur. Excepteur sint occaecat cupidatat non proident, sunt in
          culpa qui officia deserunt mollit anim id est laborum.
        </p>
      </div>
      {/* <img
        className="image"
        src="http://assets.stickpng.com/thumbs/580b585b2edbce24c47b29a8.png"
        alt="people"
      /> */}
    </div>
  );
}
