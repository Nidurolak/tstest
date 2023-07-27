import React, { useState } from 'react';

interface RadioButtonProps {
    options: string[];
    Change :any;
  }
  
  const RadioButton: React.FC<RadioButtonProps> = ({ options, Change }) => {
    const handleOptionChange = (event: React.ChangeEvent<HTMLInputElement>) => {
      const selectedIndex = event.target.value;
      Change(event.target.value);
    };
    const name = "radio_group";
  
    return (
      <div>
        {options.map((option, index) => (
          <label key={option}>
            <input
              type="radio"
              name={name} // 같은 name 속성으로 라디오 버튼 묶음
              value={index}
              onChange={handleOptionChange}
            />
            {option}
          </label>
        ))}
      </div>
    );
  };
  
  export default RadioButton;
  