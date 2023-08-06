import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import students from "../jsonfile/student.json";
import RadioButton from '../components/RadioButtonProps';
import exp from 'constants';


interface JogyoProps {
  props: string[][];
}
const JogyoBox = ({props} :JogyoProps) =>{
  console.log(props)
  return(<JogtoBoxDiv>
    {props.map((item) => {
      return (<JowonContainer><JowonBox key = {item[0]}>
        {item[1]} - {item[0]} 
      </JowonBox>
      <JowonBox>
        멘토 - {item[2]}
      </JowonBox>
      <JowonBox>
        버디 - {item[3]}
      </JowonBox>
      <JowonCheckBox>
        오전 : <StyledCheckbox/> 오후 : <StyledCheckbox/> 버디 : <StyledCheckbox/> 멘토 : <StyledCheckbox/>
      </JowonCheckBox>
      <JowonCheckBox>
        자리비움 - 오전 : <StyledCheckbox/> 오후 : <StyledCheckbox/> 버디 : <StyledCheckbox/> 멘토 : <StyledCheckbox/>
      </JowonCheckBox>
      </JowonContainer>)
    })}
  </JogtoBoxDiv>)
}

const StyledCheckbox = styled.input.attrs({ type: "checkbox" })`
border-radius: 5px;
border: 3px solid #ccc;
background-color: #fff;
width: 16px;
height: 16px;
margin-right: 8px;
cursor: pointer;

&:checked {
}
`;

const JowonCheckBox = styled.div`
border-radius: 5px;
padding-left:5px;
display: flex;
align-items: center;
text-align: left;
margin: 10px;
  max-width: 100%;
  height: 30px;
  background-color: rgb(220, 220, 220);;
`

const JowonContainer = styled.div`
  align-items: flex-start;
  display: flex;
`

const JowonBox = styled.div`
border-radius: 5px;
padding-left:5px;
display: flex;
align-items: center;
text-align: left;
margin: 10px;
  width: 130px;
  height: 30px;
  background-color: rgb(220, 220, 220);;
`

const JogtoBoxDiv = styled.div`
  max-width: 100%;
  height: 100%;
  padding: 12px;
  background-color: rgb(180, 180, 180);
  border-radius: 10px;
`

export default JogyoBox;