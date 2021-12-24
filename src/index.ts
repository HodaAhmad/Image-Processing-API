import express from 'express';
import routes from './routes/index';

const app = express();
const port = 3000;


app.get('/', (req, res): void => {
  res.status(200).send('Please visit api/images and type your image URL with the width and Length for image');
});

app.listen(port, () => {
  console.log(`server started at http://localhost:${port}/api`);
});

app.use('/api', routes);

export default app;