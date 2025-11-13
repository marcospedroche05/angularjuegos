import { Component, OnInit } from '@angular/core';
import { Equipo } from '../../models/Equipo';
import { ServiceFutbol } from '../../service/service.futbol';

@Component({
  selector: 'app-menu',
  standalone: false,
  templateUrl: './menu.component.html',
  styleUrl: './menu.component.css',
})
export class MenuComponent implements OnInit{
  public equipos!: Array<Equipo>
  constructor(private _service: ServiceFutbol){}
  ngOnInit(): void {
    this._service.getEquipos().subscribe(result => {
      this.equipos = result;
    }) 
  }
}
