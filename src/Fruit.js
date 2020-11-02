import React from "react";

export default function Fruit(props) {
  return (
    <div>
      <p>
        {props.fruitName} color = {props.color}
      </p>
    </div>
  );
}
