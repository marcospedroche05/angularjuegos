import { Component, OnInit } from '@angular/core';
import { ServiceFutbol } from '../../service/service.futbol';
import { forkJoin } from 'rxjs';
import { ActivatedRoute, Params } from '@angular/router';
import { DatosEquipo } from '../../models/DatosEquipo';

@Component({
  selector: 'app-equiposdelay.component',
  standalone: false,
  templateUrl: './equiposdelay.component.html',
  styleUrl: './equiposdelay.component.css',
})
export class EquiposdelayComponent implements OnInit {
  public idEquipo!: number
  public datos!: DatosEquipo
  
  constructor(private _service: ServiceFutbol, private _activeRouter: ActivatedRoute){}
  
  
  ngOnInit(): void {
      this._activeRouter.params.subscribe((params: Params) => {
        this.idEquipo = parseInt(params["idEquipo"]);
      })
      this._service.getDatosEquipo(this.idEquipo).subscribe(result => {
        this.datos = result
      })
  }

}
