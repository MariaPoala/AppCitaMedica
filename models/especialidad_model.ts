import internal from "stream";
class EspecialidadModel {
    id: number;
    fecha_creacion?: string;
    nombre: string;
    descripcion?: string;
    codigo: string;
    estado: boolean;
    id_servicio: number;
    url_img: string;
    nombre_servicio?: string;
    constructor() {
        this.id = 0;
        this.nombre = "";
        this.estado = true;
        this.codigo = "";
        this.id_servicio = 0;
        this.url_img="";
    }
}
export default EspecialidadModel