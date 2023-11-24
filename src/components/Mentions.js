
import { Header1 } from "./Headers";
import { Paragraph } from "./Paragraphs";
import { Block } from "./Block";
import { Clause } from "./Clause";

function Mention(data, color, index) {
    let marks = {bold: false, italics: false, underline: false};
  
    let children = [];
  
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
    console.log(data);
    data.children.forEach((child, index) => {
      switch(child.type) {
        case 'h1': children.push(Header1(child, index, marks)); break;
        case 'p': children.push(Paragraph(child, index, marks)); break;
        case 'block': children.push(Block(child, index, marks)); break;
        case 'clause': children.push(Clause(child, index, marks)); break;
        case undefined: children.push(MentionText(child, index, data.color)); break;
        default: console.log(child.type);
      }
    });
    // console.log(color);
    return (
        <>
            {/* <span style={{ 
            backgroundColor: {color},
            whiteSpace: 'pre-line',
            fontStyle: marks.italics? "italics":"normal", 
            fontWeight: marks.bold? "bold":"normal",
            textDecorationLine: marks.underline? "underline":"none"}}></span> */}

            { children }
        </>
    )
  }

  function MentionText(data, index,color) {
    let marks = {bold: false, italics: false, underline: false};

    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
    return (
      <span key={index} style={{ 
        whiteSpace: 'pre-line',
        background: color,
        color: "white",
        fontStyle: marks.italics? "italics":"normal", 
        fontWeight: marks.bold? "bold":"normal",
        textDecorationLine: marks.underline? "underline":"none"}}> {data.text}</span>
    )
  }

export default Mention;