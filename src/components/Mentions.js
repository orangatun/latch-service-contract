
import { Header1 } from "./Headers";
import { Paragraph, PText } from "./Paragraphs";
import { Block } from "./Block";
import { Clause } from "./Clause";

function Mention(data, index) {
    let marks = {bold: false, italics: false, underline: false};
  
    let children = [];
  
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  
    data.children.forEach((child, index) => {
      switch(child.type) {
        case 'h1': children.push(Header1(child, index, marks)); break;
        case 'p': children.push(Paragraph(child, index, marks)); break;
        case 'block': children.push(Block(child, index, marks)); break;
        case 'clause': children.push(Clause(child, index, marks)); break;
        default: console.log(child.type);
      }
    });
    return (
      <></>
    )
  }

export default Mention;