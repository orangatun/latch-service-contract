import input from './data/input.json';
import './App.css';


// TO-DO remove marks being passed everywhere. It's been added to styling.

function App() {

  // console.log(input);

  let blocksList = [];
  let marks = {bold: false, italics: false, underline: false};
  input.forEach((block, index)=> {
    blocksList.push(Block(block, index, marks));
  })
  return (
    // input.map((block)=> Block(block))
    blocksList
  )
}

function Block(data, index) {
  let marks = {bold: false, italics: false, underline: false};

  // console.log(data);
  let children = [];
  console.log(data.children);
  if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;

  data.children.forEach((child, index) => {
    switch(child.type) {
      case 'h1': children.push(Header1(child, index, marks)); break;
      case 'p': children.push(Paragraph(child, index, marks)); break;
      case 'block': children.push(Block(child, index, marks)); break;
      case 'clause': children.push(Clause(child, index, marks)); break;
      default: alert("unknown child type encountered");
    }
  })
  // console.log(children.length);
  return (
    <div key = {index} className='block'> 
      { children }
    </div>
  )
}

function Header1(data, index) {
  let marks = {bold: false, italics: false, underline: false};

  // console.log(data, index);
  if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  return (
    <h1 alt="header" className="title" key = {index} 
    style={{ 
      fontStyle: marks.italics? "italics":"normal", 
      fontWeight: marks.bold? "bold":"normal",
      textDecorationLine: marks.underline? "underline":"none"}}>{ data.children[0].text }</h1>
  );
}


function Paragraph(data, index) {
  let marks = {bold: false, italics: false, underline: false};

  if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  let children = [];
  data.children.forEach((text, index) => {
    if(text.hasOwnProperty("type")) children.push(Mention(text, index, marks));
    else children.push(PText(text, index, marks));
  });
  return (
    <p key = {index} alt={data.title}>
      { children }
    </p>
  )
}

function Mention(data, index, marks) {
  return (
    <></>
  )
}

function PText(data, index) {
  let marks = {bold: false, italics: false, underline: false};

  if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  return (
    <span key={index} style={{ 
      fontStyle: marks.italics? "italics":"normal", 
      fontWeight: marks.bold? "bold":"normal",
      textDecorationLine: marks.underline? "underline":"none"}}> {data.text}</span>
  )
}


function Clause(data, index, marks) {
  return (
    <></>
    // <h1 className="title">{ data }</h1>
  )
}


export default App;
