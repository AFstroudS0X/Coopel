import {Schema, model} from 'mongoose'

export const esquema = new Schema({ // crear modelo
    name:{
        type: String
    },
    apepat:{
        type: String
    },
    apemat:{
        type: String
    }
 })
 

export const ModeloEmpleados = new model ('Empleados', esquema)