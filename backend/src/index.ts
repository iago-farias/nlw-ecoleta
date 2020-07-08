import express from 'express';
import cors from 'cors';
import path from 'path';
import routes from './routes';
import {errors} from 'celebrate';
import dotenv from 'dotenv';

dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());
app.use(routes);

//Para acessar arquivos estáticos
app.use('/uploads', express.static(path.resolve(__dirname, '..', 'uploads')));

app.use(errors());

app.listen(3333);