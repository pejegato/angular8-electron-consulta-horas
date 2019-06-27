export class Pacientes {

    private _nombres: string;
    private _apellidoPaterno: string;
    private _apellidoMaterno: string;
    private _direccion: string;
    private _numero: number;
    private _comuna: string;
    private _ciudad: string;
    private _telefono1: number;
    private _telefono2: number;
    private _sexo: string;
    private _fechaNacimiento: Date;
    private _historialMedico: string;
    private _prioridad: string;





    get nombres(): string {
        return this._nombres;
    }

    set nombres(value: string) {
        this._nombres = value;
    }

    get apellidoPaterno(): string {
        return this._apellidoPaterno;
    }

    set apellidoPaterno(value: string) {
        this._apellidoPaterno = value;
    }

    get apellidoMaterno(): string {
        return this._apellidoMaterno;
    }

    set apellidoMaterno(value: string) {
        this._apellidoMaterno = value;
    }

    get direccion(): string {
        return this._direccion;
    }

    set direccion(value: string) {
        this._direccion = value;
    }

    get numero(): number {
        return this._numero;
    }

    set numero(value: number) {
        this._numero = value;
    }

    get comuna(): string {
        return this._comuna;
    }

    set comuna(value: string) {
        this._comuna = value;
    }

    get ciudad(): string {
        return this._ciudad;
    }

    set ciudad(value: string) {
        this._ciudad = value;
    }

    get telefono1(): number {
        return this._telefono1;
    }

    set telefono1(value: number) {
        this._telefono1 = value;
    }

    get telefono2(): number {
        return this._telefono2;
    }

    set telefono2(value: number) {
        this._telefono2 = value;
    }

    get sexo(): string {
        return this._sexo;
    }

    set sexo(value: string) {
        this._sexo = value;
    }

    get fechaNacimiento(): Date {
        return this._fechaNacimiento;
    }

    set fechaNacimiento(value: Date) {
        this._fechaNacimiento = value;
    }

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
