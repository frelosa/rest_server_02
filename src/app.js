import express from 'express';
//---
import employeesRoutes from './routes/employees.routes.js'
//import employeesRailwayRoutes from './routes/employees.railway.routes.js'
import indexRoutes from './routes/index.routes.js'

//import {PORT} from  './config.js'
//------------------------------
const app= express();

app.use(express.json());
//---
app.use(indexRoutes);
app.use('/api',employeesRoutes);
//app.use('/api_railway',employeesRailwayRoutes);

app.use((req,res,next)=>{
    res.status(404).json({
        mensaje: "endpoint not found"
    })
})

export default app;