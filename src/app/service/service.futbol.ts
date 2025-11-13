import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { delay, forkJoin, map, Observable } from "rxjs";
import { Jugador } from "../models/Jugador";
import { environment } from "../../environments/environment.development";
import { Equipo } from "../models/Equipo";
import { DatosEquipo } from "../models/DatosEquipo";

@Injectable()
export class ServiceFutbol {
    constructor(private _http: HttpClient) { }

    getJugadoresEquipo(idEquipo: number): Observable<Array<Jugador>> {
        let request = "api/jugadores/jugadoresequipos/" + idEquipo;
        let url = environment.urlApuestas + request;
        return this._http.get<Array<Jugador>>(url);
    }

    findEquipo(idEquipo: number): Observable<Equipo> {
        let request = "api/equipos/" + idEquipo;
        let url = environment.urlApuestas + request;
        return this._http.get<Equipo>(url);
    }

    getEquipos(): Observable<Array<Equipo>> {
        let request = "api/equipos";
        let url = environment.urlApuestas + request;
        return this._http.get<Array<Equipo>>(url);
    }

    getDatosEquipo(id: number): Observable<DatosEquipo> {
        let urlEquipo = environment.urlApuestas + "api/Equipos/" + id;
        let urlJugadores = environment.urlApuestas + "api/Jugadores/JugadoresEquipos/" + id;
        return forkJoin({
            equipo: this._http.get<Equipo>(urlEquipo),
            jugadoresEquipo: this._http.get<Array<Jugador>>(urlJugadores).pipe(delay(4000))
        }).pipe(map(response => new DatosEquipo(response.equipo, response.jugadoresEquipo)))
    }
}
