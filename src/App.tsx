import React, { useState, ChangeEvent } from 'react';
import './App.css';
import styled from "styled-components";

function App() {
  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputType, setInputType] = useState<any>('');
  const [trueCount, settrueCount] = useState<number>(0);

  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

    interface Configurations {
      EnzygoticTwinsChance: number;
      MaxEnzygoticTwins: number;
    }
    
    const configurations: Configurations = {
      EnzygoticTwinsChance: 0.01,
      MaxEnzygoticTwins: 27
    };
    
    let division = 1;
    
    while (division <= configurations.MaxEnzygoticTwins) {
      const chance = configurations.EnzygoticTwinsChance + (configurations.EnzygoticTwinsChance * (configurations.MaxEnzygoticTwins - division));
    
      if (Math.random() < chance) {
        settrueCount(prevCount => prevCount + 1);
      }
    
      division++;
    }

    if (value === '' || /^[0-9]+$/.test(value)) {
      const parsedValue = parseInt(value, 10);

      if (parsedValue <= 99999) {
        setInputType(typeof inputValue)
        setInputValue(parsedValue);
      } else {
        setInputType(typeof inputValue)
        setInputValue(value);
      }
    }
  };

  return (
    <div>
      <input maxLength={20} type="text" value={inputValue} onChange={handleChange} />
      <TextColor>Input sdsdsds: {trueCount}</TextColor>
      <div>Input Value: {inputValue}</div>
      <div>Current Type: {inputType}</div>
    </div>
  );  
};

const TextColor= styled.div`
 color: red; 
`

export default App;
