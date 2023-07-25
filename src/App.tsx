import React, { useState, ChangeEvent, useEffect } from 'react';
import './App.css';
import styled from "styled-components";
import { debug } from 'console';
import Router from './shared/Router';

function App() {
  return (<Router/>);  
};

const TextColor= styled.div`
 color: red;
`

export default App;
