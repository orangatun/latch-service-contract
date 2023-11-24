import { Header4 } from "./Headers";
import { Paragraph, PText } from "./Paragraphs";
import { Block } from "./Block";
import { Clause } from "./Clause";

function UL(data, index) {
  
    let marks = {bold: false, italics: false, underline: false};
  
    let children = [];
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  
    data.children.forEach((child, index) => {
      if(child.hasOwnProperty("type")) {
      switch(child.type) {
        case 'h4': children.push(Header4(child, index, marks)); break;
        case 'p': children.push(Paragraph(child, index, marks)); break;
        case 'li': children.push(LI(child, index, marks)); break;
        case 'lic': children.push(LIC(child, index, marks)); break;
        case 'ul': children.push(UL(child, index, marks)); break;
        case 'block': children.push(Block(child, index, marks)); break;
        case 'clause': children.push(Clause(child, index, marks)); break;
        default: console.log(child.type);
      }
    } else {
      children.push(Paragraph(child, index, marks));
    }
    })
    return (
      <li key={index} style={{ 
        whiteSpace: 'pre-line',
        fontStyle: marks.italics? "italics":"normal", 
        fontWeight: marks.bold? "bold":"normal",
        textDecorationLine: marks.underline? "underline":"none"}}> {children}</li>
    )
  }
  
  
  
  function LI(data, index) {
  
    let marks = {bold: false, italics: false, underline: false};
  
    let children = [];
    // children.push(clauseIndex++ +". ");
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  
    data.children.forEach((child, index) => {
      switch(child.type) {
        case 'h4': children.push(Header4(child, index, marks)); break;
        case 'p': children.push(Paragraph(child, index, marks)); break;
        case 'li': children.push(LI(child, index, marks)); break;
        case 'lic': children.push(LIC(child, index, marks)); break;
        case 'ul': children.push(UL(child, index, marks)); break;
        case 'block': children.push(Block(child, index, marks)); break;
        case 'clause': children.push(Clause(child, index, marks)); break;
        default: children.push(PText(child, index, marks)); console.log(child.type);
      }
    })
    return (
      <li key={index} style={{ 
        whiteSpace: 'pre-line',
        fontStyle: marks.italics? "italics":"normal", 
        fontWeight: marks.bold? "bold":"normal",
        textDecorationLine: marks.underline? "underline":"none"}}> {children}</li>
    )
  }
  
  
  function LIC(data, index) {
    let marks = {bold: false, italics: false, underline: false};
  
  
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
    return (
      <li key={index} style={{ 
        whiteSpace: 'pre-line',
        fontStyle: marks.italics? "italics":"normal", 
        fontWeight: marks.bold? "bold":"normal",
        textDecorationLine: marks.underline? "underline":"none"}}> {data.text}</li>
    )
  }
  

  export {LI, LIC, UL};