import React, { useEffect, useReducer } from "react";
import FruitList from "./Fruit";

function fruitsReducer(state, action) {
  switch (action.type) {
    case "init":
      return action.payload;
    case "delete":
      return action.payload;
    default:
      return state;
  }
}
export default function HooksReducer() {
  const [fruits, dispatch] = useReducer(fruitsReducer, []);

  useEffect(() => {
    setTimeout(() => {
      dispatch({
        type: "init",
        payload: ["banana", "apple"]
      });
    }, 1000);
    return () => {};
  });

  return (
    <div>
      <FruitList
        fruits={fruits}
        setFruit={newFruit =>
          dispatch({
            type: "delete",
            payload: newFruit
          })
        }
      />
    </div>
  );
}
