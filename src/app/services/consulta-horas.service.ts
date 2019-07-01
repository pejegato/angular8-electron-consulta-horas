import { Injectable } from '@angular/core';
import {Pacientes} from '../dominio/Pacientes';
import {Doctor} from '../dominio/Doctor';
import { Observable } from 'rxjs';
import {HttpClient, HttpHeaders} from '@angular/common/http';
import {Especialidades} from '../dominio/Especialidades';
import {HorasSolicitadas} from '../dominio/HorasSolicitadas';

@Injectable({
  providedIn: 'root'
})
export class ConsultaHorasService {

  // Http Options
  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  }


  constructor(private  httpClient: HttpClient) { }

  public getPacientes(rut: number) {
    return this.httpClient.get<Pacientes>('http://localhost:3000/pacientes/?rut=' + rut);
  }
  public getHorasDisponibles(rutDoctor: number) {


  }

  public getEspecialidades() {
    return this.httpClient.get<Especialidades>('http://localhost:3000/especialidades');
  }

  public getDoctoresPorEspecialidad(especialidad: Especialidades) {
    return this.httpClient.get<Doctor>('http://localhost:3000/doctores/?especialidad=' + especialidad.id);
  }

  public getHorasSolicitadas(doctor: Doctor) {
    return this.httpClient.get<HorasSolicitadas>('http://localhost:3000/horas/?especialidad=' + doctor.rut + doctor.especialidad);
  }

  public createHorasSolicitadas (hora: HorasSolicitadas): Observable<HorasSolicitadas> {

    let jsonHour = {
      hora: hora.hora,
      fecha: hora.fecha,
      doctor: hora.doctor,
      especialidad: hora.especialidad
    }


    return this.httpClient.post<HorasSolicitadas>('http://localhost:3000/horas/', JSON.stringify(jsonHour), this.httpOptions);
  }



}
