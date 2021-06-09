import React, { useState } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Card from "./Card";

function App() {
  const [showFeature, setShowFeature] = useState(true);

  function handleChange() {
    setShowFeature(false);
  }

  return (
    <>
      <Header />
      {showFeature && <Feature />}
      <Card showProduct={handleChange} showCards={showFeature} />
    </>
  );
}

export default App;
