import {Pacientes} from './Pacientes';

export class Doctor extends Pacientes {

    private _especialidad: string;


    get especialidad(): string {
        return this._especialidad;
    }

    set especialidad(value: string) {
        this._especialidad = value;
    }
}
