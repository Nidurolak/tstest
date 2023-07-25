import React, { useState, ChangeEvent, useEffect } from 'react';
import { styled } from 'styled-components';
import students from "../jsonfile/student.json";


const JogyoBox = () =>{
  return(<div></div>)
}

function Main (){

  
  const jogyo :string[] = []
  console.log(students.studentsGroup[0])

    return (<MainBox>
        <div>출첵 확인기</div>
        {students.studentsGroup.map((group, index) => {
          return(<div key = {index}>  
            {group}
          </div>)
        })}
        
    </MainBox>);
}




export default Main;

const MainBox = styled.div`
display: flex;
  width: 100vw;
  height: 50vw;
flex-direction: column;
justify-content: center;
align-items: center;
background-color: ivory;
`