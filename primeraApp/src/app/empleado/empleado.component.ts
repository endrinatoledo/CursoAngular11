import { ThisReceiver } from '@angular/compiler';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-empleado',
  templateUrl: './empleado.component.html',
  styleUrls: ['./empleado.component.css'],
})
export class EmpleadoComponent implements OnInit {
  nombre = 'Endrina';
  apellido = 'Toledo';
  empresa = 'ES Developer ca'
  edad = 19;
  habilitarCuadro = false;
  usuRegistrado = false;
  textoDeRegistro = 'No hay nadie registrado';

  cambiarEmpresa(event:Event){
    this.empresa = (<HTMLInputElement>event.target).value;
  }
  getRegistro() {
    this.usuRegistrado = false;
  }

  setUsuarioRegistro(event:Event) {

    (<HTMLInputElement>event.target).value === 'si'
      ? (this.textoDeRegistro = 'usuario registrado')
      : (this.textoDeRegistro = 'usuario no registrado');
  }
  constructor() {}

  ngOnInit(): void {}
}
