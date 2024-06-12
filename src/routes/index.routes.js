import {Router} from 'express'
import {ping} from '../controllers/index.controllers.js'
//
//import { pool } from '../db.js';

const router = Router();

router.get('/ping', ping);

export default router;