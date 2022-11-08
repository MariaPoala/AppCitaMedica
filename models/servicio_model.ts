class ServicioModel {
    id: number;
    fecha_creacion?: string;
    nombre: string;
    descripcion?: string;
    url_imagen: string;

    constructor() {
        this.id = 0;
        this.nombre ="";
        this.url_imagen="";
    }
}
export default ServicioModel


