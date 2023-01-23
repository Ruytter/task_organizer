import  pg from 'pg';
import dotenv from 'dotenv';
dotenv.config();

const { Pool } = pg;
const connection = new Pool({
    host: process.env.POSTGRES_HOST,
    port: process.env.POSTGRES_PORT,
    user: process.env.POSTGRES_USERNAME,
    password: process.env.POSTGRES_PASSWORD,
    databasse: process.env.POSTGRES_DATABASE,
  });
export {connection};