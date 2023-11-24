
function Header1(data, index) {
  let marks = {bold: false, italics: false, underline: false};

  if(data.hasOwnProperty("bold") && data.bold===true) marks.bold=true;
  return (
    <h1 alt="header" className="title" key = {index} 
    style={{ 
      whiteSpace: 'pre-line',
      fontStyle: marks.italics? "italics":"normal", 
      fontWeight: marks.bold? "bold":"normal",
      textDecorationLine: marks.underline? "underline":"none"}}>{ data.children[0].text }</h1>
  );
}

function Header4(data, index) {
  let marks = {bold: false, italics: false, underline: false};



  if(data.children[0].hasOwnProperty("bold") && data.children[0].bold===true) marks.bold=true;
  if(data.children[0].hasOwnProperty("underline") && data.children[0].underline===true) marks.underline=true;

  return (
    <h4 alt="header4" className="title" key = {index} 
    style={{ 
      whiteSpace: 'pre-line',
      fontStyle: marks.italics? "italics":"normal", 
      fontWeight: marks.bold? "bold":"normal",
      textDecorationLine: marks.underline? "underline":"none"}}>{ data.children[0].text }</h4>
  );
}

export {Header1, Header4};
