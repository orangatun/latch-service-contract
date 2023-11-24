import { Header1} from "./Headers";
import { Paragraph } from "./Paragraphs";
import { Clause } from "./Clause";

function Block(data, index) {
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
  })
  return (
    <div key = {index} className='block'
    style={{ 
      whiteSpace: 'pre-line',
      fontStyle: marks.italics? "italics":"normal", 
      fontWeight: marks.bold? "bold":"normal",
      textDecorationLine: marks.underline? "underline":"none"}}> 
      { children }
    </div>
  )
}

export { Block };

  