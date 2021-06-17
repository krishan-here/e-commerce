import React, { useState } from "react";
import Header from "./Header";
import Feature from "./Feature";
import Card from "./Card";

function App() {
  const [showFeature, setShowFeature] = useState({
    feature: true,
    product: false,
  });
  const [showCard, setShowCard] = useState({ card: true, product: false });

  function handleFeature() {
    setShowCard({ card: false, product: false });
    setShowFeature({ feature: true, product: true });
  }
  function handleCard() {
    setShowFeature({ feature: false, product: false });
    setShowCard({ card: true, product: true });
  }
  function goHome() {
    setShowFeature({ feature: true, product: false });
    setShowCard({ card: true, product: false });
  }

  return (
    <>
      <Header goHome={goHome} />
      {showFeature.feature && (
        <Feature showProduct={handleFeature} showFeatures={showFeature} />
      )}
      {showCard.card && <Card showProduct={handleCard} showCards={showCard} />}
    </>
  );
}

export default App;
