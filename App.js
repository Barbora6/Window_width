import { useState, useEffect } from "react";

function App() {
  const [windowSize, setWindowSize] = useState(window.innerWidth);

  const sizeControl = () => {
    setWindowSize(window.innerWidth);
  };

  useEffect(() => {
    console.log("Já jsem useEffect");
    window.addEventListener("resize", sizeControl);
    return () => {
      console.log("Já jsem cleanUp function");
      window.removeEventListener("resize", sizeControl);
    };
  });

  return <section className="container">
        <div className="size-window">
      <h1>šířka okna</h1>
      <h2>{windowSize}</h2>
    </div>
  </section>

  
}

export default App;
