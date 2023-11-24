import Mention from "./Mentions";


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


function PText(data, index) {
    let marks = {bold: false, italics: false, underline: false};
  
    if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
    return (
      <span key={index} style={{ 
        whiteSpace: 'pre-line',
        fontStyle: marks.italics? "italics":"normal", 
        fontWeight: marks.bold? "bold":"normal",
        textDecorationLine: marks.underline? "underline":"none"}}> {data.text}</span>
    )
  }

  
export {Paragraph, PText};