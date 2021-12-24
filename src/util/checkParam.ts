
//checking if file name is entered
const checkFileNameExists = (filename: string): boolean => {
    if (filename){
      console.log("filename entered");
      return true;
    }
    console.log("filename not entered");
    return false;
  };

//checking if width is positive
const checkWidth = (width: number): boolean =>{
    if (width <= 0 || Number.isNaN(width)){
        console.log("width not positive value");
        return false;
    }
    console.log("width positive value ");
    return true;
}  

//check if height is positive
const checkHeight = (height: number): boolean =>{
    if (height <= 0 || Number.isNaN(height)){
        console.log("height not positive number");
        return false;
    }
    console.log("height positive number ");
    return true;
}  

export default {
checkFileNameExists,
checkHeight,
checkWidth
}; 