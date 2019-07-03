import { Component, OnInit } from '@angular/core';
import {MatSelectModule} from '@angular/material/select'
import {Pacientes} from '../dominio/Pacientes';
import { _ } from 'underscore';
import {ConsultaHorasService} from '../services/consulta-horas.service';

@Component({
    selector: 'app-user-profile',
    templateUrl: './user-profile.component.html',
    styleUrls: ['./user-profile.component.css']
})
export class UserProfileComponent implements OnInit {

    paciente: Pacientes;
    rut: any = '';

    selectRegiones: string[] = ['I Región', 'II Región', 'III Región'];
    selectCiudades: string[] = ['Santiago', 'Valparaiso', 'Rancagua'];
    selectComunas: string[] = ['Quinta Normal', 'San Bernardo', 'La Cisterna'];
    region: string;
    isEdicion = false;
    disable = false;

    constructor(public ch: ConsultaHorasService) { }

    ngOnInit() {}

    public getPaciente(rut: number) {
        if (rut){

            this.ch.getPacientes(rut).subscribe((data: {}) => {
                if(data[0]){
                    alert("Paciente encontrado, se editará el actual");
                    this.disable = true;
                    this.paciente = data[0];
                    this.isEdicion = true;
                }else{
                    this.disable = true;
                    alert("No existe paciente, se creara uno nuevo");
                    this.paciente = new Pacientes();
                    this.isEdicion = false
                }
            })
        }else{
            alert("Rut obligatorio");
        }
    }

    public guardarPaciente(){

        this.paciente.rut = this.rut;
        if(!this.isEdicion){
            this.ch.createPaciente(this.paciente).subscribe((data: {}) => {
                alert("Paciente guardado exitosamente");
                this.limpiar();
            })
        }else{
            this.ch.updatePaciente(this.paciente).subscribe((data: {}) => {
                alert("Paciente editado exitosamente");
                this.limpiar();
            })
        }
    }


    limpiar (){
        this.disable = false;
        this.paciente = null;
        this.rut = '';
    }

}
