import input from './data/input.json';
import { Block } from './components/Block';

import './App.css';

function App() {

  console.log(input);
  let blocksList = [];
  let marks = {bold: false, italics: false, underline: false};
  
  input.forEach((block, index)=> {
    blocksList.push(Block(block, index, marks));
  });
  return (
    blocksList
  );
}

export default App;
