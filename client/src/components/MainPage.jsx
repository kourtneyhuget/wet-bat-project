import React, { useState } from "react";
import Header from "./Header";
import { QuickQuote } from "./QuickQuote";
import { PendingQuotes } from "./PendingQuotes";
import { CompletedQuotes } from "./CompletedQuotes";

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
      <Header />
      <QuickQuote updatePending={updatePendingQuotes} />
      <PendingQuotes
        updatePending={updatePending}
        updateCompletedQuotes={updateCompletedQuotes}
      />
      <CompletedQuotes updateCompleted={updateCompleted} />
    </div>
  );
}
