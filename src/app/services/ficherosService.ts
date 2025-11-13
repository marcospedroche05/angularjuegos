import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";

@Injectable()
export class FicherosService {
    constructor(private _http: HttpClient){}
    subirFichero(imagen: Object): Observable<any>{
        let request = "api/TestingFiles";
        let url = "https://apipostfiles.azurewebsites.net/" + request;
        return this._http.post(url, imagen);
    }
}