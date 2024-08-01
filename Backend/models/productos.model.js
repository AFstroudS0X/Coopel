import {Schema, model} from 'mongoose'

export const esquema = new Schema({ //para crear modelo
    name:{
        type: String
    },
    price:{
        type: Number
    },
    description:{
        type: String
    }
    
 })
 

export const ModeloProductos = new model ('Productos', esquema)