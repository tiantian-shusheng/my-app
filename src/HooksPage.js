import React, { useState, useEffect } from "react";
import FruitList from './Fruit';

export default function HooksPage() {
  const [date, setDate] = useState(new Date());
  const [fruits, setFruit] = useState(["apple", "banana"]);
  useEffect(() => {
    // console.log('useEffect')
    const timerId = setInterval(() => {
      setDate(new Date());
    }, 1000);
    return () => clearInterval(timerId);
  },[date]);
  return (
    <div>
      HooksPage
      <p>{date.toLocaleTimeString()}</p>
      <FruitList fruits={fruits} setFruit={setFruit} />
      <AddFruit fruits={fruits} setFruit={setFruit} />
    </div>
  );
}

function AddFruit({fruits,setFruit}) {
  const [name, setName] = useState('');
  const Add = () => {
    setFruit([...fruits, name]);
  };
  return (
    <div>
      <input value={name} onChange={e => setName(e.target.value)}></input>
      <a onClick={() => Add()}>添加</a>
    </div>
  );
}

