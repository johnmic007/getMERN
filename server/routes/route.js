import express from 'express';
import { adduser,getUsers } from '../controller/userController.js';


const router=express.Router();

router.post('/add' ,adduser);
router.get('/all' ,getUsers);

export default router;