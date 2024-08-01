import {Schema, model} from 'mongoose'

export const esquema = new Schema({ //para crear modelo
    name:{
        type: String
    },
    apepat:{
        type: String
    },
    suscription:{
        type: String
    }
    
 })
 

export const ModeloClientes = new model ('Clientes', esquema)