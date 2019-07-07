import { Component, OnInit } from '@angular/core';
import {ConsultaHorasService} from '../services/consulta-horas.service';
import {Pacientes} from '../dominio/Pacientes';
import {MatSnackBar} from '@angular/material/snack-bar';

@Component({
  selector: 'app-user-profile',
  templateUrl: './fichas-medicas.component.html',
  styleUrls: ['./fichas-medicas.component.css']
})
export class FichasMedicasComponent implements OnInit {

  constructor(public ch: ConsultaHorasService, private _snackBar: MatSnackBar) {
  }

  rut: any = '';
  disable = false;
  paciente: Pacientes;

  ngOnInit() {
  }

  public getPaciente(rut: number) {
    if(rut){
      this.ch.getPacientes(rut).subscribe((data: {}) => {
        console.log(data);
        if(data[0]){
          this.disable = true;
          this.paciente = data[0];
        }else{
          this.openSnackBar('No existe paciente', null);
          //alert("No existe paciente");
          this.limpiar();
        }
      })
    } else{
      //alert("Rut obligatorio");
      this.openSnackBar('Rut obligatorio', null);
    }
  }

  actualizar(){
    this.ch.updatePaciente(this.paciente).subscribe((data: {}) => {
      //alert("Paciente editado exitosamente");
      this.openSnackBar('Paciente editado exitosamente', null);
      this.limpiar();
    })
  }

  limpiar (){
    this.disable = false;
    this.paciente = null;
    this.rut = '';
  }

  openSnackBar(message: string, action: string) {
    this._snackBar.open(message, action, {
      duration: 2000,
    });
  }

}
