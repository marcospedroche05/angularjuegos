import { Equipo } from "./Equipo";
import { Jugador } from "./Jugador";

export class DatosEquipo {
    constructor(
        public equipo: Equipo,
        public jugadoresEquipo: Array<Jugador>
    ){}
}