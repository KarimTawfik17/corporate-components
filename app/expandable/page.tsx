"use client";
import { useState } from "react";
import Card from "./components/Card";
var cardsData = [
  { id: 1, expanded: false },
  { id: 2, expanded: false },
  { id: 3, expanded: false },
  { id: 4, expanded: false },
];
export default function Expandable() {
  const [cards, setCards] = useState(cardsData);
  function expand(id: number) {
    setCards(
      cards.map((c) => ({
        ...c,
        expanded: c.id == id ? !c.expanded : false,
      }))
    );
  }
  return (
    <div className="flex gap-1">
      {cards.map((card) => (
        <Card
          expand={() => expand(card.id)}
          expanded={card.expanded}
          key={card.id}
        />
      ))}
    </div>
  );
}
