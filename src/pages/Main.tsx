import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import students from "../jsonfile/student.json";
import RadioButton from '../components/RadioButtonProps';
import JogyoBox from '../components/JogyoBox';


function Main (){


  const [openIndex, setOpenIndex]  = useState<number|undefined>()
  const jogyo :string[] = ["1번 조교","2번 조교","3번 조교"]
  console.log(students.studentsGroup[0])
  console.log(jogyo)
  console.log(openIndex)

  const handleRadioChange = (selectedIndex: number) => {
    setOpenIndex(selectedIndex);
  };

    return (<MainBox>
        <div>출첵 확인기</div>
        <RadioButton options={jogyo} Change={setOpenIndex} />
        {
        students.studentsGroup.map((group, index) => {
          if(index == openIndex){
            return(
              <>
              <CeheckJowon>불참 확인</CeheckJowon>
              <JogyoBox key = {index} props ={group}/>
              </>
              /*<JogtoBoxDiv key={index}>
                <JogyoBox props = {group}/>
              </JogtoBoxDiv>*/
              )
          }
        })}
        
    </MainBox>);
}




export default Main;

const CeheckJowon = styled.button`
width: 200px;
height: 60px;
background-color: #5d5a88;
cursor: pointer;
color: white;
border-radius: 20px;
border: 1px solid #5d5a88;
font-weight: 400;
font-size: 32px;
  
`

const MainBox = styled.div`
display: flex;
gap:10px;
  width: 100vw;
  min-height: 50vw;
  max-height: 100%;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ivory;
`