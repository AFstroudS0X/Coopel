import { ModeloClientes } from "../models/clientes.model.js";

export const testClientes =() => {
    console.log('conexion a clientes establecida')
}

ModeloClientes.create({
    name: 'Elizabeth',
    apepat:'Dunschneit',
    suscription:'annual'
})