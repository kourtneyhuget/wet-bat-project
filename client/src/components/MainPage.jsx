import React, { useState } from "react";
import Header from "./Header";
import { QuickQuote } from "./QuickQuote";
import { PendingQuotes } from "./PendingQuotes";
import { CompletedQuotes } from "./CompletedQuotes";

export function MainPage() {
  const [updatePending, setUpdatePending] = useState(true);

  //pass in to quick quote as prop
  const updateQuotes = () => {
    setUpdatePending(!updatePending);
  };

  return (
    <div className="main-page-container">
      <Header />
      <QuickQuote updatePending={updateQuotes} />
      <PendingQuotes update={updatePending} />
      <CompletedQuotes />
    </div>
  );
}
