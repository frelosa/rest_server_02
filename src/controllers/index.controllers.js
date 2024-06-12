import { pool } from '../db.js';

export const ping = async(req,res)=>{
    const [result] = await pool.query('select now() as result');
    res.json(result[0]);

}