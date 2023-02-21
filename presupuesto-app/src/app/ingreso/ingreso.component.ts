import { Component, OnInit } from '@angular/core';
import { Ingreso } from './ingreso.model';
import { IngresoServicio } from './ingreso.servicio';

@Component({
  selector: 'app-ingreso',
  templateUrl: './ingreso.component.html',
  styleUrls: ['./ingreso.component.css'],
})
export class IngresoComponent {
  ingresos: Ingreso[] = [];
  constructor(private ingresoServicio: IngresoServicio) {}
  ngOnInit(){
    this.ingresos=this.ingresoServicio.ingreso;
  }

  eliminarRegistro(variableIngreso: Ingreso){
    this.ingresoServicio.eliminar(variableIngreso);
  }
}
