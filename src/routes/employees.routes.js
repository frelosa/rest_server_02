import {Router} from 'express'
import { getEmployees,createEmployees,updateEmployees,deleteEmployees,getEmployee,updatePartialEmployees } from '../controllers/employees.controller.js';

const router = Router();

router.get('/employes',getEmployees); //mostrar todos
router.get('/employes/:id',getEmployee); //mostrar por id
router.post('/employes', createEmployees); //insertar
router.put('/employes/:id', updateEmployees); //actualizar por id
router.delete('/employes/:id',deleteEmployees); //eliminar por id
router.patch('/employes/:id', updatePartialEmployees); //actualizar parcialmente por id

export default router;