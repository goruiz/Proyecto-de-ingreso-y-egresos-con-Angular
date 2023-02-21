import { Component, OnInit, Input } from '@angular/core';
import { EgresoServicio } from './egreso.servicio';
import { Egreso } from './egresos.model';


@Component({
  selector: 'app-egreso',
  templateUrl: './egreso.component.html',
  styleUrls: ['./egreso.component.css']
})
export class EgresoComponent {
  egresos:Egreso[]=[];
  @Input() ingresoTotal:number;
  constructor(private egresoServicio:EgresoServicio){

  }
  ngOnInit(){
    this.egresos=this.egresoServicio.egresos;
  }
  eliminarEgreso(variableEgreso:Egreso){
    this.egresoServicio.eliminar(variableEgreso);

  }
  calcularPorcentaje(egreso: Egreso){
    return egreso.valor/this.ingresoTotal;
  }

}
