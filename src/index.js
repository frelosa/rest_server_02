import app from './app.js'
import {PORT} from  './config.js'

/*
import express from 'express';
//---
import employeesRoutes from './routes/employees.routes.js'
import indexRoutes from './routes/index.routes.js'

import {PORT} from  './config.js'
//------------------------------
const app= express();

app.use(express.json());
//---
app.use(indexRoutes);
app.use('/api',employeesRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        mensaje: "endpoint not found"
    })
})
    */
//----
app.listen(PORT); //3000
console.log('Ejecutando el servidor en el puerto ',PORT);

//---------------------------------------------
/*
import express from 'express';
//---
import { pool } from './db.js';
//------------------------------
const app= express();
//---
app.get('/ping', async(req,res)=>{
    const [result] = await pool.query('select now() as result');
    res.json(result[0]);

});

app.get('/employes',(req,res)=>res.send('obteniendo empleados'));
app.post('/employes',(req,res)=>res.send('creando empleados'));
app.put('/employes',(req,res)=>res.send('actualizando empleados'));
app.delete('/employes',(req,res)=>res.send('eliminando empleados'));
//----
app.listen(3000);
console.log('Ejecutando el servidor en el puerto 3000');
*/