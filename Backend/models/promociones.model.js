import {Schema, model} from 'mongoose'

export const esquema = new Schema({ //para crear modelo
    product:{
        type: String
    },
    price:{
        type: Number
    },
    discount:{
        type: String
    }
    
 })
 

export const ModeloPromociones = new model ('Promociones', esquema)