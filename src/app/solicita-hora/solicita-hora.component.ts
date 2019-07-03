import {Component, OnInit} from '@angular/core';
import {ConsultaHorasService} from '../services/consulta-horas.service';
import {Especialidades} from '../dominio/Especialidades';
import {Pacientes} from '../dominio/Pacientes';
import {Doctor} from '../dominio/Doctor';
import {HorasSolicitadas} from '../dominio/HorasSolicitadas';
import {_} from 'underscore';

// @ts-ignore
@Component({
    selector: 'app-solicita-hora',
    templateUrl: './solicita-hora.component.html',
    styleUrls: ['./solicita-hora.component.scss']
})


export class SolicitaHoraComponent implements OnInit {

    rut: any = '';
    disable = false;
    paciente: Pacientes;

    listaEspecialidades: Especialidades;
    listaDoctores: Doctor;


    //seleccionados
    especialidadSeleccionada: Especialidades;
    doctorSeleccionado: Doctor;
    horaSeleccionada: any;
    fechaSeleccionada: Date;

    //tabla
    displayedColumns: string[] = ['hora', 'disponible'];
    datasource: any = [
        {hora: '9:00', disponible: true,},
        {hora: '9:15', disponible: true,},
        {hora: '9:30', disponible: true,},
        {hora: '9:45', disponible: true,},


        {hora: '10:00', disponible: true,},
        {hora: '10:15', disponible: true,},
        {hora: '10:35', disponible: true,},
        {hora: '10:45', disponible: true,},


        {hora: '11:00', disponible: true,},
        {hora: '11:15', disponible: true,},
        {hora: '11:35', disponible: true,},
        {hora: '11:45', disponible: true,},

        {hora: '12:00', disponible: true,},
        {hora: '12:15', disponible: true,},
        {hora: '12:35', disponible: true,},
        {hora: '12:45', disponible: true,},

        {hora: '13:00', disponible: true,},
        {hora: '13:15', disponible: true,},
        {hora: '13:35', disponible: true,},
        {hora: '13:45', disponible: true,},

        {hora: '14:00', disponible: true,},
        {hora: '14:15', disponible: true,},
        {hora: '14:35', disponible: true,},
        {hora: '14:45', disponible: true,},

        {hora: '15:00', disponible: true,},
        {hora: '15:15', disponible: true,},
        {hora: '15:35', disponible: true,},
        {hora: '15:45', disponible: true,},

        {hora: '16:00', disponible: true,},
        {hora: '16:15', disponible: true,},
        {hora: '16:35', disponible: true,},
        {hora: '16:45', disponible: true,},

        {hora: '17:00', disponible: true,},
        {hora: '17:15', disponible: true,},
        {hora: '17:35', disponible: true,},
        {hora: '17:45', disponible: true,},

        {hora: '18:00', disponible: true,},
        {hora: '18:15', disponible: true,},
        {hora: '18:35', disponible: true,},
        {hora: '18:45', disponible: true,},

        {hora: '19:00', disponible: true,},
        {hora: '19:15', disponible: true,},
        {hora: '19:35', disponible: true,},
        {hora: '19:45', disponible: true,},

        {hora: '20:00', disponible: true,},
        {hora: '20:15', disponible: true,},
        {hora: '20:35', disponible: true,},
        {hora: '20:45', disponible: true,}

    ];


    constructor(public ch: ConsultaHorasService) {
    }

    ngOnInit() {
    }

    public getPaciente(rut: number) {
        if (rut) {
            this.ch.getPacientes(rut).subscribe((data: {}) => {
                console.log(data);
                if (data[0]) {
                    this.disable = true;
                    this.paciente = data[0];
                    this.getEspecialidades();
                } else {
                    alert('No existe paciente');
                    this.limpiarCampos();
                }
            })
        } else {
            alert('Rut obligatorio');
        }
    }

    public getEspecialidades() {

        this.especialidadSeleccionada = null;
        this.listaDoctores = null;
        this.fechaSeleccionada = null;
        this.doctorSeleccionado = null;
        this.horaSeleccionada = null;

        this.ch.getEspecialidades().subscribe((data: Especialidades) => {
            console.log(data);
            this.listaEspecialidades = data;
        })
    }

    public getDoctores(especialidad: Especialidades) {

        this.doctorSeleccionado = null;
        this.horaSeleccionada = null;
        this.fechaSeleccionada = null;
        this.ch.getDoctoresPorEspecialidad(especialidad).subscribe((data: Doctor) => {
            console.log(data);
            this.listaDoctores = data;
        })
    }

    public getHorasSolicitadas(doctor: Doctor, fechaSeleccionada: Date) {

        this.ch.getHorasSolicitadas(doctor).subscribe((data: HorasSolicitadas) => {
            console.log(data);
            //verifica si la hora existe
            for (let hora of this.datasource) {
                let existe = _.find(data, {
                    'fecha': fechaSeleccionada.setHours(0, 0, 0, 0).toString(),
                    'hora': hora.hora,
                    'doctor': doctor.rut
                });
                if (existe) {
                    hora.disponible = false;
                } else {
                    hora.disponible = true;
                }
            }
        })
    }

    public resetCalendario() {
        this.fechaSeleccionada = null;
        this.horaSeleccionada = null;
    }

    public createHorasSolicitadas(doctor: Doctor, fechaSeleccionada: Date, horaSeleccionada: HorasSolicitadas) {

        if (this.horaSeleccionada.disponible) {
            let horaGuardar: HorasSolicitadas = new HorasSolicitadas();

            horaGuardar.fecha = fechaSeleccionada.setHours(0, 0, 0, 0).toString();
            horaGuardar.doctor = doctor.rut;
            horaGuardar.especialidad = doctor.especialidad;
            horaGuardar.hora = horaSeleccionada.hora;

            this.ch.createHorasSolicitadas(horaGuardar).subscribe((data: {}) => {
                this.limpiarCampos();
                alert('Hora agendada exitosamente');
            })

        } else {
            alert('Hora no disponible');
        }
    }


    public limpiarCampos() {
        this.disable = true;
        this.rut = null;
        this.paciente = null;
        this.listaEspecialidades = null;
        this.listaDoctores = null;
        this.doctorSeleccionado = null;
        this.horaSeleccionada = null;
        this.fechaSeleccionada = null;
        this.especialidadSeleccionada = null;

    }
}
