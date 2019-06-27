import {Personas} from './Personas';

export class Pacientes extends Personas {

    private _historialMedico: string;
    private _prioridad: string;


    get historialMedico(): string {
        return this._historialMedico;
    }

    set historialMedico(value: string) {
        this._historialMedico = value;
    }

    get prioridad(): string {
        return this._prioridad;
    }

    set prioridad(value: string) {
        this._prioridad = value;
    }
}
