import React from "react";
import "../styles/DashboardGreeting.scss";

export function DashboardGreeting(props) {
  return (
    <div className="dashboard-greeting-container">
      <div className="h3-paragraph-container">
        <h1>WELCOME TO YOUR DASHBOARD</h1>
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
      <div className="stat-container">
        <div className="new-leads-container">
          <span className="stat-number">101</span>
          <br />
          <span>INCOMING</span>
          <br />
          <span> NEW LEADS</span>
        </div>
        <div className="quotes-created-container">
          <span className="stat-number"> 35</span>
          <br />
          <span>QUOTES</span>
          <br />
          <span>CREATED</span>
        </div>
        <div className="pending-orders-container">
          <span className="stat-number"> 40</span>
          <br />
          <span>PENDING</span>
          <br />
          <span>ORDERS</span>
        </div>
        <div className="dashboard-image">
          <img
            src="https://www.qminder.com/resources/img/product-pages/hero-images/customer-service-dashboard.svg"
            alt="dashboard"
          />
        </div>
      </div>
    </div>
  );
}
