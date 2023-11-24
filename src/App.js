import input from './data/input.json';
import { Block } from './components/Block';

import './App.css';


// TO-DO remove marks being passed everywhere. It's been added to styling.

function App() {

  let blocksList = [];
  let marks = {bold: false, italics: false, underline: false};
  input.forEach((block, index)=> {
    blocksList.push(Block(block, index, marks));
  })
  return (
    blocksList
  )
}

export default App;
