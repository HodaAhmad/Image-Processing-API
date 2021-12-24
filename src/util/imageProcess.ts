import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import checkFileExist from './checkFile';

//original imaeges folder directory
const dir = path.join(__dirname, '../../images/original/');

//thumbnail directory
const thumbDir = path.join(__dirname, '../../images/thumb/');

const transformImage = async (
  filename: string,
  height: number,
  width: number
): Promise<string> => {
    //setting the output path for image in thumbnail
  const outputFilePath =
  thumbDir + filename + '_thumb_' + width.toString() + '_' + height.toString() + '.jpg';
    //getting original image path
  const imagePath = dir + filename + '.jpg';

  // Check if input image exist in original image folder
  if (!checkFileExist(imagePath)) {
    throw new Error('input image is not found');
  }

  // check if image already exists in thumbnail and do not resize image again if it exists
  if (!checkFileExist(outputFilePath)) {
      //check if thumb folder exists, if not create a thumb folder
        if (!fs.existsSync(thumbDir)) {
            await fs.promises.mkdir(thumbDir);
        }
    await sharp(imagePath)
        .resize(width, height)
        .toFile(outputFilePath, (err: Error): void => {
            if(err){
                throw err;
            }
        })
        .toBuffer();
  }  

  return outputFilePath;
};


export default {
  transformImage
};