import React, { useState } from "react";
import Card from "../Card/Card.jsx";
import "./deck.css"; // Correct import for CSS

const SUITS = ["♠", "♣", "♥", "♦"];
const VALUES = [
  "A",
  "2",
  "3",
  "4",
  "5",
  "6",
  "7",
  "8",
  "9",
  "10",
  "J",
  "Q",
  "K",
];

const freshDeck = () => {
  return SUITS.flatMap((suit) => {
    return VALUES.map((value) => ({
      suit,
      value,
    }));
  });
};

const Deck = () => {
  const [deck, setDeck] = useState(freshDeck());

  const shuffle = () => {
    const newDeck = [...deck];
    for (let i = newDeck.length - 1; i > 0; i--) {
      const newIndex = Math.floor(Math.random() * (i + 1));
      [newDeck[i], newDeck[newIndex]] = [newDeck[newIndex], newDeck[i]];
    }
    setDeck(newDeck);
  };

  const pop = () => {
    const newDeck = [...deck];
    newDeck.shift();
    setDeck(newDeck);
  };

  return (
    <div className="deck">
      {" "}
      {/* Use the class name as per your CSS definition */}
      {deck.map((card, index) => (
        <Card key={index} suit={card.suit} value={card.value} />
      ))}
      <button onClick={shuffle}>Shuffle</button>
      <button onClick={pop}>Pop</button>
    </div>
  );
};

export default Deck;
