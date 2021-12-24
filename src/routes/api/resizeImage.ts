import express from 'express';
import ImageProcess from '../../util/imageProcess';
import checkParam from '../../util/checkParam';

const imagesRoute = express.Router();

imagesRoute.get('/',
  async (req,res): Promise<express.Response | unknown> => {
    try {
      const filename = req.query.filename as string;
      const width = Number(req.query.width);
      const height = Number(req.query.height);

      //check if file name is entered
      if(!checkParam.checkFileNameExists(filename)){
        return res.status(400).send('Input file name is missing');
      }
    
      //check if width is entered
      if(!checkParam.checkWidth(width)){
        return res.status(400).send('Input width is not a positive value');
      }

      //check if height is entered
      if(!checkParam.checkHeight(height)){
        return res.status(400).send('Input Height is not a positive value');
      }
      
      //resize image and send it to display
      const outputPath = await ImageProcess.transformImage(
        filename,
        height,
        width
      );
      res.status(200).sendFile(outputPath);
    } catch (err) {
      res.status(400).send('This file name does not exist');
    }
  }
);

export default imagesRoute;

