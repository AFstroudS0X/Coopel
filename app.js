import mongoose from 'mongoose';
import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import {testClientes} from './Backend/controllers/clientes.controller.js'
import {testEmpleados} from './Backend/controllers/empleados.controller.js'
import {testGerentes} from './Backend/controllers/gerentes.controller.js'
import {testProductos} from './Backend/controllers/productos.controller.js'
import {testPromociones} from './Backend/controllers/promociones.controller.js'

dotenv.config();
mongoose.connect(process.env.url) //conexion a la base de datos 
.then (()=> {
    console.log("conexion establecida a la base de datos")
})
.catch((error)=>{
    console.log ("Error de conexion")
})
const app =express(); //Este crea el servidor
app.use (cors());

app.listen(4005,()=>{ //Escucha al servidor 
    console.log ('Servidor funcionando correctamente')
})


testClientes()
testEmpleados()
testGerentes()
testProductos()
testPromociones()