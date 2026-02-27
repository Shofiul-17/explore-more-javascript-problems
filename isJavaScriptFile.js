function isJavaScriptFile(fileName){
  
  // if statement used to validate input parameter for bonus point
  if(typeof fileName !== "string"){
    return "Input Must Be String!";
  }
  else if(fileName === ""){
    return "File Name Cannot be Empty!"
  }

  const convert = fileName.toLowerCase();
  const javaScriptFile = convert.endsWith(".js");
  
  return javaScriptFile;
}

const myFileName = "file.JS";
const result = isJavaScriptFile(myFileName);
console.log(result);