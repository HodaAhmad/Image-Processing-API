import express from 'express';
import imagesRoute from './api/resizeImage';

const routes = express.Router();

routes.get('/', (req, res): void => {
  res.status(200).send('Home Page');
});

routes.use('/images', imagesRoute);

export default routes;