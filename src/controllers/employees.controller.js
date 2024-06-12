import { pool } from "../db.js"

//export const getEmployees= (req,res)=>res.send('obteniendo empleados')
export const getEmployees= async(req,res)=>{
    //throw new Error('Mi error'); //generar un error a proposito
    try {
        //throw new Error('Mi error'); //generar un error a proposito
        const [rows] = await pool.query('select * from employe')
        res.json(rows)    
    } catch (error) {
        return res.status(500).json({
            mensaje:'a ocurrido un error'
        })
    }
    
}

export const getEmployee=async (req,res)=>{
    console.log(req.params.id)   
    try {
        const [rows] = await pool.query('select * from employe where id = ?',[req.params.id]) 
        console.log(rows)
        //res.send('obteniendo por id empleado')
        //res.send({ rows })
        if(rows.length<=0){
            return res.status(404).json({
                mensaje:"Registro no encontrado"
            })
        }
        res.json( rows[0] )    
    } catch (error) {
        return res.status(500).json({
            mensaje:'a ocurrido un error'
        })
    }
}

//export const createEmployees= (req,res)=>res.send('creando empleados')
export const createEmployees=async (req,res)=>{
    
    const {name,salary} = req.body;
    try {
        const [rows] = await pool.query('INSERT INTO employe (NAME,salary) VALUES (?,?)',[name,salary])
        //res.send({ rows })
        res.send({ 
            id: rows.insertId,
            name,
            salary
        })
        //console.log(req.body);
        //res.send('creando empleados')
    } catch (error) {
        return res.status(500).json({
            mensaje:'a ocurrido un error'
        })
    }
    
    
}

//export const deleteEmployees= (req,res)=>res.send('eliminando empleados')
export const deleteEmployees=async (req,res)=>{
    try {
        const [result] = await pool.query('delete from employe where id=?',req.params.id)
        console.log(result)
        if(result.affectedRows<=0){
            return res.status(404).json({
                mensaje:"Registro no encontrado"
            })
        }
        //res.send('empleado eliminado');
        res.sendStatus(204) //codigo 204 quiere decir que fue exitoso
    } catch (error) {
        return res.status(500).json({
            mensaje:'a ocurrido un error'
        })
    }
}

//export const updateEmployees=  (req,res)=>res.send('actualizando empleados')
export const updateEmployees= async (req,res)=>{
    
    const {id}= req.params //extrae el id de req.params
    const {name,salary} = req.body
    //console.log(id,name,salary)
    try {
        const [result] = await pool.query('update employe set name = ?, salary = ? where id = ?',[name,salary,id])
        if (result.affectedRows===0){
            return res.status(404).json({mensaje:"Registro no encontrado"})
        }
        console.log(result)
        const [rows]= await pool.query('select * from employe where id = ?',[id])
        //res.json('recibido');
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje:'a ocurrido un error'
        })
    }
    
}

export const updatePartialEmployees= async (req,res)=>{
    const {id}= req.params //extrae el id de req.params
    const {name,salary} = req.body
    //console.log(id,name,salary)
    try {
        const [result] = await pool.query('update employe set name = IFNULL(?,name), salary = IFNULL(?,salary) where id = ?',[name,salary,id])
        if (result.affectedRows===0){
            return res.status(404).json({mensaje:"Registro no encontrado"})
        }
        console.log(result)
        const [rows]= await pool.query('select * from employe where id = ?',[id])
        //res.json('recibido');
        res.json(rows[0]);
    } catch (error) {
        return res.status(500).json({
            mensaje:'a ocurrido un error'
        })
    }
    
}

 