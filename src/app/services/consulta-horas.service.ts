import { Injectable } from '@angular/core';
import {Pacientes} from '../dominio/Pacientes';

@Injectable({
  providedIn: 'root'
})
export class ConsultaHorasService {

  paciente: Pacientes = new Pacientes();

  constructor() { }

  public getPacientes(rut: number) {
    this.paciente.nombres = 'Rodrigo Andrés';
    this.paciente.apellidoPaterno = 'Ramírez';
    this.paciente.apellidoMaterno = 'Retamal';
    this.paciente.sexo = 'M';
    this.paciente.fechaNacimiento = new Date();
    this.paciente.ciudad = 'Santiago';
    this.paciente.comuna = 'Quinta Normal';
    this.paciente.direccion = 'Salvador Gutierrez';
    this.paciente.numero = 6006;
    this.paciente.telefono1 = 227756735;
    this.paciente.telefono2 = 78903395;
    this.paciente.historialMedico = 'Este paciente se encuentra sano';
    this.paciente.prioridad = 'C4'
  }

  public getHorasDisponibles(rutDoctor: number) {


  }

  public getEspecialidades(rutDoctor: number) {


  }

  public getDoctoresPorEspecialidad(codEspecialidad: number) {


  }

}
