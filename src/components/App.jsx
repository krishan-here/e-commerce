import React, { useState } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Card from "./Card";

function App() {
  const [showFeature, setShowFeature] = useState(true);

  function handleChange() {
    setShowFeature(false);
  }
  function goHome() {
    setShowFeature(true);
  }

  return (
    <>
      <Header goHome={goHome} />
      {showFeature && <Feature />}
      <Card showProduct={handleChange} showCards={showFeature} />
    </>
  );
}

export default App;
