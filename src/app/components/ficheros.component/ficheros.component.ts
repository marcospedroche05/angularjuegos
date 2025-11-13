import { Component, ElementRef, ViewChild } from '@angular/core';
import { FicherosService } from '../../services/ficherosService';

@Component({
  selector: 'app-ficheros',
  standalone: false,
  templateUrl: './ficheros.component.html',
  styleUrl: './ficheros.component.css',
})
export class FicherosComponent {
  @ViewChild("cajaimagen") cajaimagen!: ElementRef
  constructor(private _service: FicherosService){}
  subirFichero(){
    
    if(this.cajaimagen.nativeElement.files != null || this.cajaimagen.nativeElement.files.length > 0) {
      const archivo = this.cajaimagen.nativeElement.files[0];
      const reader = new FileReader();

      reader.onload = () => {
        const base64String = reader.result as string;
        const base64Content = base64String.split(",")[1];

        const imagenObject = {
          fileName: archivo.name,
          fileContent: base64Content
        }

        this._service.subirFichero(imagenObject).subscribe(result => {
          alert("Imagen subida");
        })
      }

      reader.readAsDataURL(archivo);
      
    } else {
      alert("No se ha subido nada")
    }

  }
}
