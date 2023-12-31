import { Header4 } from "./Headers";
import { Paragraph } from "./Paragraphs";
import { LI, UL, LIC } from "./Lists";
import { Block } from "./Block";


function Clause(data, index, clauseCount) {

    let marks = {bold: false, italics: false, underline: false};

    let children = [];
    // children.push(clauseIndex++ +". ");
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  
    console.log(data, index);
    data.children.forEach((child, index) => {
      switch(child.type) {
        case 'h4': children.push(Header4(child, index, clauseCount)); break;
        case 'p': children.push(Paragraph(child, index, clauseCount)); break;
        // case 'li': children.push(LI(child, index, marks)); break;
        // case 'lic': children.push(LIC(child, index, marks)); break;
        case 'ul': children.push(UL(child, index, clauseCount)); break;
        // case 'block': children.push(Block(child, index, marks)); break;
        case 'clause': children.push(Clause(child, index, clauseCount)); break;
        default: console.log(child.type);
      }
    })
  
    return (
      <>
      <ol start={clauseCount.count++}> 
      <li key = {clauseCount.count} className='block clause'> 
        { children }
        
      </li>
      </ol>
      </>
    )
  }

export {Clause};