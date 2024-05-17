export class Pinguino{
    
    id: string;
    name: string;
    scientific_name: string;
    feeding: string;
    global_distribution: string;
    description: string;
    image: string;
    edad: number;
    diagnostico: string;

    constructor(id: string, name: string, scientific_name: string, feeding: string, global_distribution: string, description: string, image: string, edad: number, diagnostico: string){
        this.id = id;
        this.name = name;
        this.scientific_name = scientific_name;
        this.feeding = feeding;
        this.global_distribution = global_distribution;
        this.description = description;
        this.image = image;
        this.edad = edad;
        this.diagnostico = diagnostico;
    }
}