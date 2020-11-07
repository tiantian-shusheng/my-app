import React, { useState, useEffect } from "react";

export default function FruitList({ fruits, setFruit }) {
  console.log(fruits)
  const deleteFruit = index => {
    let tem = [...fruits];
    tem.splice(index, 1);
    setFruit(tem);
    console.log("fruits", fruits);
    console.log("tem", tem);
  };
  return (
    <ul>
      {fruits.length > 0 &&
        fruits.map((item, index) => {
          return (
            <li key={index} onClick={() => deleteFruit(index)}>
              {item}
            </li>
          );
        })}
    </ul>
  );
}
