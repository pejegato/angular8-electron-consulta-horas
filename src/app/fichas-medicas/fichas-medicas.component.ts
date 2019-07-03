import { Component, OnInit } from '@angular/core';
import {ConsultaHorasService} from '../services/consulta-horas.service';
import {Pacientes} from '../dominio/Pacientes';

@Component({
  selector: 'app-user-profile',
  templateUrl: './fichas-medicas.component.html',
  styleUrls: ['./fichas-medicas.component.css']
})
export class FichasMedicasComponent implements OnInit {

  constructor(public ch: ConsultaHorasService) {
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
          alert("No existe paciente");
          this.limpiar();
        }
      })
    } else{
      alert("Rut obligatorio");
    }
  }

  actualizar(){
    this.ch.updatePaciente(this.paciente).subscribe((data: {}) => {
      alert("Paciente editado exitosamente");
      this.limpiar();
    })
  }

  limpiar (){
    this.disable = false;
    this.paciente = null;
    this.rut = '';
  }

}
