//esta clase maneja el ingreso
import {Ingreso} from './ingreso.model'
export class IngresoServicio{
    ingreso:Ingreso[]=[ //arreglo de ingresos
        new Ingreso("Salario",4000), //elemento cuya descripcion es salario y el valor es 4000
        new Ingreso("Venta coche", 500)
    ]; 
    eliminar(variableIngreso:Ingreso){
        const indice: number=this.ingreso.indexOf(variableIngreso);
        this.ingreso.splice(indice,1)// indica cuantos elementos queremeos remover a partir del indice que estamos indicando
    }
}