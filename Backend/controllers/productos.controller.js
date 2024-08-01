import { ModeloProductos } from "../models/productos.model.js";

export const Productos =() => {
    console.log('conexion a los productos establecida')
}

ModeloProductos.create({
    name: 'Xbox one series x',
    price:'200',
    description:'console game'
})