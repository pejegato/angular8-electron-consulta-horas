export class HorasSolicitadas {

    private _hora: string;
    private _fecha: number;
    private _doctor: string;
    private _especialidad: string;


    get hora(): string {
        return this._hora;
    }

    set hora(value: string) {
        this._hora = value;
    }

    get fecha(): number {
        return this._fecha;
    }

    set fecha(value: number) {
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
