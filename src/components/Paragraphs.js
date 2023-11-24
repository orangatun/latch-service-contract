import { Clause } from "./Clause";
import Mention from "./Mentions";


function Paragraph(data, index) {
    let marks = {bold: false, italics: false, underline: false};
  
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
    let children = [];
    // console.log(data);
    if(!data.hasOwnProperty("children")) return PText(data, index);
    data.children.forEach((text, index) => {
      if(text.hasOwnProperty("type")) {
        switch(text.type) {
            case "clause": children.push(Clause(text, index, marks)); break;
            case "p": children.push(Paragraph(text, index, marks)); break;
            default:  children.push(Mention(text, index, marks));
        }
      }
      else children.push(PText(text, index, marks));
    });
    return (
      <p key = {index} alt={data.title}>
        { children }
      </p>
    )
  }


function PText(data, index) {
    let marks = {bold: false, italics: false, underline: false};
  
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
    if(data.hasOwnProperty("underline") && data.underline===true) marks.underline=true;

    return (
      <span key={index} style={{ 
        whiteSpace: 'pre-line',
        fontStyle: marks.italics? "italics":"normal", 
        fontWeight: marks.bold? "bold":"normal",
        textDecorationLine: marks.underline? "underline":"none"}}> {data.text}</span>
    )
  }

  
export {Paragraph, PText};