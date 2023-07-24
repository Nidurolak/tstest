import React, { useState, ChangeEvent, useEffect } from 'react';
import styled from "styled-components";
import { debug } from 'console';

function Test() {
  let 회원정보 : Member= {
    name : 'kim',
    age : 30,
    plusOne (x){
      return x + 1
    },
    changeName : () => {
      console.log('안녕')
    }
  }
  회원정보.plusOne(1);
  회원정보.changeName();


  type Member = {
    name : string,
    age : number,
    plusOne : ( x :number ) => number,
    changeName : () => void
  }

  const [inputValue, setInputValue] = useState<number | string>('');
  const [inputType, setInputType] = useState<any>('');
  const [trueCount, settrueCount] = useState<number>(0);
  const [local, setLocal] = useState<string>('');

  function checkLocalStorage( num: number | boolean, data? : string| boolean) : void{
    if(data){
      if(typeof data == 'string'){
        setLocal(data as string)
      }
    }
    else{
      console.log(num)
    }
  }
  checkLocalStorage(2323)


  const handleChange = (event: ChangeEvent<HTMLInputElement>) => {
    const value = event.target.value;

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

export default Test;
