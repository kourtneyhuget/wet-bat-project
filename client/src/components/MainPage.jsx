import React from "react";
import Header from "./Header";
import { QuickQuote } from "./QuickQuote";

export function MainPage() {
  return (
    <div className="main-page-container">
      <QuickQuote />
    </div>
  );
}

// axios
// .get("/api/test")
// .then((res) => {
//   console.log("made it back to frontend", res);
// })
// .catch((err) => console.log("err", err));
