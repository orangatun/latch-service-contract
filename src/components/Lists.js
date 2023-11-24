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
        case 'li': children.push(LI(child, index, marks)); break;
        default: console.log(child.type);
      }
    } else {
      children.push(Paragraph(child, index, marks));
    }
    })
    return (
      <ul key={index} style={{ 
        whiteSpace: 'pre-line',
        fontStyle: marks.italics? "italics":"normal", 
        fontWeight: marks.bold? "bold":"normal",
        textDecorationLine: marks.underline? "underline":"none"}}> {children}</ul>
    )
  }
  
  
  
  function LI(data, index) {
  
    let marks = {bold: false, italics: false, underline: false};
  
    let children = [];
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  
    data.children.forEach((child, index) => {
      switch(child.type) {
        case 'lic': children.push(Paragraph(child, index, marks)); break;
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