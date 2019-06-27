import { Injectable } from '@angular/core';
import {Pacientes} from '../dominio/Pacientes';
import {Doctor} from '../dominio/Doctor';

@Injectable({
  providedIn: 'root'
})
export class ConsultaHorasService {

  paciente: Pacientes;
  doctores: Doctor[];

  constructor() { }

  public getPacientes(rut: number) {

    this.paciente  = new Pacientes();

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

    const doctor1: Doctor = new Doctor();
    doctor1.nombres = 'Juan';
    doctor1.apellidoPaterno = 'Perez';
    doctor1.apellidoPaterno = 'Prado';
    this.doctores.push(doctor1);

    const doctor2: Doctor = new Doctor();
    doctor2.nombres = 'Guillermo';
    doctor2.apellidoPaterno = 'Gatica';
    doctor2.apellidoPaterno = 'Gausse';
    this.doctores.push(doctor2);

    const doctor3: Doctor = new Doctor();
    doctor3.nombres = '';
    doctor3.apellidoPaterno = '';
    doctor3.apellidoPaterno = '';
    this.doctores.push(doctor3);

  }




}
