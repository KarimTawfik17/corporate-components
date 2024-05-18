"use client";
import { useState } from "react";
import Pagination from "./components/Pagination";
var cardsData = [
  { id: 1, expanded: false },
  { id: 2, expanded: false },
  { id: 3, expanded: false },
  { id: 4, expanded: false },
];
export default function Expandable() {
  return (
    <div className="flex gap-1">
      <Pagination />
    </div>
  );
}
