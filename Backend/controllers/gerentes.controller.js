import { ModeloGerentes } from "../models/gerentes.model.js";

export const Gerentes =() => {
    console.log('conexion a gerentes establecida')
}

ModeloGerentes.create({
    name: 'Zack',
    apepat:'Reiner',
    apemat:'Stroud'
})