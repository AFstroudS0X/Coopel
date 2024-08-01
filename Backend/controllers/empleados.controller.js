import { ModeloEmpleados } from "../models/empleados.model.js";

export const Empleados =() => {
    console.log('conexion a empleados establecida')
}

ModeloEmpleados.create({
    name: 'Erick',
    apepat:'Piña',
    apemat:'Sandia'
})