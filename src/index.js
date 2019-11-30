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

  const imageProps2 = {
    x: 200,
    y: 50,
    w: 100,
    h: 100,
    src: "https://source.unsplash.com/random/500x500",
    alt: "random",
    id: "img-2"
  };
  return (
    <div className="App">
      <Image {...imageProps} />
      <Image {...imageProps2} />
    </div>
  );
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
