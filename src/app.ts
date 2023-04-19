require('dotenv').config();
import express from 'express';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';
import {Request, Response} from 'express';

import {notFound, errorHandler} from './middlewares';
import MessageResponse from './interfaces/MessageResponse';
import uploadRoute from './api/routes/uploadRoute';

const app = express();

app.use(morgan('dev'));
app.use(
  helmet({
    crossOriginResourcePolicy: false,
  })
);
app.use(cors());
app.use(express.json());

app.use('/uploads', express.static('uploads'));

app.get<{}, MessageResponse>('/', (req: Request, res: Response) => {
  res.json({
    message: 'API location: /uploadimage',
  });
});

app.use('/uploadimage', uploadRoute);

app.use(notFound);
app.use(errorHandler);

export default app;
