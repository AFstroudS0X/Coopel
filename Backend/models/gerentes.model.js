import {esquema} from "./empleados.model.js";
import {model} from 'mongoose'

export const ModeloGerentes = new model('Gerentes', esquema)