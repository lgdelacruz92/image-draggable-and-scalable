import React from "react";
import ReactDOM from "react-dom";
import Image from "./image";

import "./styles.css";

function App() {
  const imageProps = {
    x: 50,
    y: 50,
    w: 100,
    h: 100,
    src: "https://source.unsplash.com/random/500x500",
    alt: "random",
    id: "img-1"
  };
  return (
    <div className="App">
      <Image {...imageProps} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
