import React from "react";
import Square from "./square";
import Knight from "./Knight";

function renderSquare(x, y, [knightX, knightY]) {
  const x = i % 8;
  const y = Math.floor(i / 8);
  const black = (x + y) % 2 === 1;
  const isKnightHere = knightX === x && knightY === y;
  const piece = isKnightHere ? <Knight /> : null;

  return <Square black={black}>{piece}</Square>;
}
export default function Board({ knightPosition }) {
  return (
    <div
      style={{
        width: "100%",
        height: "100%"
      }}
    >
      {renderSquare(0, 0, knightPosition)}
      {renderSquare(1, 0, knightPosition)}
      {renderSquare(2, 0, knightPosition)}
    </div>
  );
}
