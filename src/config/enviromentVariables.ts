import dotenv from 'dotenv';

import { Enviroment } from './enum';

const enviroment = process.env.NODE_ENV || Enviroment.DEVELOPMENT;

dotenv.config({ path: `./${enviroment}.env` });


export default {
  port: process.env.PORT,
  api_url: process.env.API_URL,
  enviroment: process.env.NODE_ENV,
};