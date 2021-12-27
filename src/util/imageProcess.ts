import sharp from 'sharp';
import fs from 'fs';
import path from 'path';
import checkFileExist from './checkFile';
//import NodeCache from 'node-cache';

//original imaeges folder directory
const dir = path.join(__dirname, '../../images/original/');

//thumbnail directory
const thumbDir = path.join(__dirname, '../../images/thumb/');

//initializing cache
//const myCache = new NodeCache();

//main function to resize image
const transformImage = async (
  filename: string,
  height: number,
  width: number
): Promise<string> => {
  //setting the output path for image in thumbnail
  const outputFile =
    thumbDir + filename + '_thumb_' + width + '_' + height + '.jpg';

  //getting original image path
  const inputFile = dir + filename + '.jpg';

  // Check if input image exist in original image folder
  if (!checkFileExist(inputFile)) {
    throw new Error('input image is not found');
  }

  // check if image already exists in thumbnail and do not resize image if it exists
  /* if (!myCache.has(outputFile)){
      if (!fs.existsSync(thumbDir)) {
        await fs.promises.mkdir(thumbDir);
      }
      await sharp(inputFile)
        .resize(width, height)
        .toFile(outputFile, (error: Error): void => {
            if(error){
                throw error;
            }
        })
        .toBuffer();
  }  else {
    console.log("retrieved");
  }
  */

  if (!checkFileExist(outputFile)) {
    //check if thumb folder exists, if not create a thumb folder
    if (!fs.existsSync(thumbDir)) {
      await fs.promises.mkdir(thumbDir);
    }

    //resize using sharp and buffer output image path
    await sharp(inputFile)
      .resize(width, height)
      .toFile(outputFile, (error: Error): void => {
        if (error) {
          throw error;
        }
      })
      .toBuffer();
  }
  return outputFile;
};

export default {
  transformImage,
};
