import { Component } from '@angular/core';
import { EgresoServicio } from '../egreso/egreso.servicio';
import { Egreso } from '../egreso/egresos.model';
import { Ingreso } from '../ingreso/ingreso.model';
import { IngresoServicio } from '../ingreso/ingreso.servicio';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  tipo: string='ingresoOperacion';
  descripcionInput:string;
  valorInput:number;
  constructor(private ingresoServicio:IngresoServicio, private egresoServicio:EgresoServicio){

  }
  tipoOperacion(evento) {
    this.tipo=evento.target.value;
  }
  agregarValor(){
    if(this.tipo=="ingresoOperacion"){
      this.ingresoServicio.ingreso.push(new Ingreso(this.descripcionInput,this.valorInput))
    }
    else{
      this.egresoServicio.egresos.push(new Egreso(this.descripcionInput,this.valorInput))
    }

  }
}
