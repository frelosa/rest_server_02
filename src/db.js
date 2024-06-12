import { createPool } from "mysql2/promise";
import {DB_DATABASE,DB_USER,DB_PASSWORD,DB_HOST,DB_PORT} from './config.js'

export const pool = createPool({
    host: DB_HOST, //'localhost',
    user: DB_USER, //'root',
    password: DB_PASSWORD, //'123456',
    port: DB_PORT, //3306,
    database: DB_DATABASE //'companydb'
})