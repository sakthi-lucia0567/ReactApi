import React from "react";
import { Suspense } from "react";
import Gallery from "./Gallery";
import Logo from "./Logo";
import "./style.css";

function App() {
  console.log("hello world");
  return (
    <div className="App">
      <Suspense fallback={<h1>Loading</h1>}>
        <Logo />
        <Gallery />
      </Suspense>
    </div>
  );
}

export default App;
