import input from './data/input.json';
import { Block } from './components/Block';

import './App.css';
import { useState } from 'react';

function App() {
  let clauseCount = {count:0};
  console.log(input);
  let blocksList = [];
  let marks = {bold: false, italics: false, underline: false};
  
  input.forEach((block, index)=> {
    blocksList.push(Block(block, index, clauseCount, marks));
  });
  return (
    blocksList
  );
}

export default App;
