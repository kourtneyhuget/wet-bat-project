import React from "react";
import Header from "./Header";
import { QuickQuote } from "./QuickQuote";
import { PendingQuotes } from "./PendingQuotes";
import { CompletedQuotes } from "./CompletedQuotes";

export function MainPage() {
  return (
    <div className="main-page-container">
      <Header />
      <QuickQuote />
      <PendingQuotes />
      <CompletedQuotes />
    </div>
  );
}
