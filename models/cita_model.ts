import internal from "stream";
class CitadModel {
    id?: number;
    fecha_creacion?: string;
    fecha_edicion?: string;
    nombrepaciente: string;
    fecha: string;
    horario: string;
    id_servicio: number;
    id_especialidad: number;
    constructor() {
        this.id = 0;
        this.nombrepaciente = "";
        this.fecha = "";
        this.horario = "";
        this.id_servicio = 0;
        this.id_especialidad=0;
    }
}
export default CitadModel