import fs from 'fs';

const checkFileExist = (outputFilePath: string): boolean => {
  if (fs.existsSync(outputFilePath)) {
    return true;
  }
  return false;
};

export default checkFileExist;
