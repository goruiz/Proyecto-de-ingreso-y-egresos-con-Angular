
import {Egreso} from './egresos.model'
export class EgresoServicio{
    egresos:Egreso[]=[ //Arreglo llamado egresos que es de tipo Egreso
        new Egreso("Renta Departamento", 900),
        new Egreso("Ropa", 200)
    ];

    eliminar(variableEgreso: Egreso){
        const indice:number=this.egresos.indexOf(variableEgreso);
        this.egresos.splice(indice,1);

    }
}