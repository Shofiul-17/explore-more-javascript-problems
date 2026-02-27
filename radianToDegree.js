function radianToDegree(degree){
  const radian = degree * 52.29;

  // Using if statement for bonus point
  if(typeof degree !== "number"){
    return "Please Enter Valid Number!";
  }

  return radian;
}

const myRadian = 10;
const degree = radianToDegree(myRadian);
console.log(degree)

