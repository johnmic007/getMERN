import express, { Router } from 'express';
import dotenv from 'dotenv';
import connection from './database/db.js';
import Routers from './routes/route.js';
import cors from 'cors';
import bodyParser from 'body-parser';

const app=express();
dotenv.config();

app.use(bodyParser.json({extended:true}));
app.use(bodyParser.urlencoded({extended:true}))


app.use(cors());

app.use('/', Routers)

const PORT=8001;

const username=process.env.DB_USERNAME;
const password=process.env.DB_PASSWORD;
connection(username,password);
app.listen(PORT,()=> console.log("server is running......"))