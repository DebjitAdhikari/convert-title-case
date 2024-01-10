function convertTitle(title){
    const capitalize=str=>str[0].toUpperCase()+str.slice(1)
    const except = ["a" ,"an", "the", "and", "but", "or", "nor", "for", "so", "yet", "at", "by", "in", "of", "off", "on", "out", "to", "up", "with"];
    const theTitle=title.toLowerCase().split(" ").map(el=>except.includes(el)?el:el[0].toUpperCase()+el.slice(1)).join(" ");
    return capitalize(theTitle);
  }
  const str=prompt("Enter your text to convert it to title case");
  const result=convertTitle(str);
  alert(result);