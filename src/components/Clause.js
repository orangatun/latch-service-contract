import { Header4 } from "./Headers";
import { Paragraph } from "./Paragraphs";
import { LI, UL, LIC } from "./Lists";
import { Block } from "./Block";
import { useState } from "react";


function Clause(data, index) {

    let marks = {bold: false, italics: false, underline: false};

    let children = [];
    // children.push(clauseIndex++ +". ");
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  
    data.children.forEach((child, index) => {
      switch(child.type) {
        case 'h4': children.push(Header4(child, index, marks)); break;
        case 'p': children.push(Paragraph(child, index, marks)); break;
        // case 'li': children.push(LI(child, index, marks)); break;
        // case 'lic': children.push(LIC(child, index, marks)); break;
        case 'ul': children.push(UL(child, index, marks)); break;
        // case 'block': children.push(Block(child, index, marks)); break;
        // case 'clause': children.push(Clause(child, index, marks)); break;
        default: console.log(child.type);
      }
    })
  
    return (
      <>
      <ol>
      <li key = {index} className='block clause'> 
        { children }
        
      </li>
      </ol>
      </>
    )
  }

export {Clause};