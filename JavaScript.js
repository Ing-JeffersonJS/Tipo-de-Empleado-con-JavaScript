
class Empleado {

    constructor(profesion, nombre, sueldo){
        this.nombre = nombre;
        this.sueldo = sueldo;
        this.profesion = profesion;
    }

    obtenerDetalle(){
        return `Profesion: ${this.profesion}, Empleado: nombre: ${this.nombre}, sueldo: ${this.sueldo}`;
    }
}

class Generente extends Empleado{
    constructor(profesion, nombre, sueldo, departamento){
        super (profesion, nombre, sueldo);
        this.departamento = departamento;
    }

    obtenerDetalle(){
        return `Generente: ${super.obtenerDetalle()} Depto : ${this.departamento}`;
    }
}



let Generente1 = new Generente("Ingeniero", "Jefferson", 5000000, "Programacion de Software");
console.log(Generente1.obtenerDetalle());

let Empleado1 = new Empleado("Tec Redes", "Camilo", 2500000);
console.log(Empleado1.obtenerDetalle());