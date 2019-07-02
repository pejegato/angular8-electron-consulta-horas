export class HorasSolicitadas {

    private _hora: string;
    private _fecha: string;
    private _doctor: string;
    private _especialidad: string;


    get hora(): string {
        return this._hora;
    }

    set hora(value: string) {
        this._hora = value;
    }

    get fecha(): string {
        return this._fecha;
    }

    set fecha(value: string) {
        this._fecha = value;
    }

    get doctor(): string {
        return this._doctor;
    }

    set doctor(value: string) {
        this._doctor = value;
    }

    get especialidad(): string {
        return this._especialidad;
    }

    set especialidad(value: string) {
        this._especialidad = value;
    }
}
