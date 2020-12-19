import React, { useState } from "react";
import { Header } from "./Header";
import { QuickQuote } from "./QuickQuote";
import { PendingQuotes } from "./PendingQuotes";
import { CompletedQuotes } from "./CompletedQuotes";
import { SideNav } from "./SideNav";
import { DashboardGreeting } from "./DashboardGreeting";
import { NewLeads } from "./NewLeads";
import { PopularPackages } from "./PopularPackages";
import "../styles/MainPage.scss";
import { PotentialRevenue } from "./PotentialRevenue";
import { Revenue } from "./Revenue";
import { TeamChat } from "./TeamChat";

export function MainPage() {
  const [updatePending, setUpdatePending] = useState(true);
  const [updateCompleted, setUpdateCompleted] = useState(true);

  //pass in to quick quote as prop
  const updatePendingQuotes = () => {
    setUpdatePending(!updatePending);
  };

  //pass in to completed quote
  const updateCompletedQuotes = () => {
    setUpdateCompleted(!updateCompleted);
  };

  return (
    <div className="main-page-container">
      <div className="header">
        <Header />
      </div>
      <div className="quick-quote">
        <QuickQuote updatePendingQuotes={updatePendingQuotes} />
      </div>
      <div className="pending-quotes">
        <PendingQuotes
          updatePending={updatePending}
          updateCompletedQuotes={updateCompletedQuotes}
        />
      </div>
      <div className="completed-quotes">
        <CompletedQuotes updateCompleted={updateCompleted} />
      </div>
      <div className="side-nav">
        <SideNav />
      </div>
      <div className="greeting-dashboard">
        <DashboardGreeting />
      </div>
      <div className="new-leads">
        <NewLeads />
      </div>
      {/* <div className="popular-packages">
        <PopularPackages />
      </div> */}
      <div className="potential-revenue">
        <PotentialRevenue />
      </div>
      <div className="revenue">
        <Revenue />
      </div>
      <div className="team-chat">
        <TeamChat />
      </div>
    </div>
  );
}
