import { ModeloPromociones } from "../models/promociones.model.js";

export const Promociones =() => {
    console.log('conexion a las promociones establecida')
}

ModeloPromociones.create({
    name: 'Play station 5',
    price:'250',
    discount:'50'
})