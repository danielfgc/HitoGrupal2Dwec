import { Component, OnInit } from '@angular/core';
import { DataService } from '../services/data.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.scss'],
})
export class FormularioComponent implements OnInit {
  nombre:String="";
  email:String="";
  telefono:String="";
  comentario:String="";
  respuesta:String="";
  


  constructor(private dataService: DataService) {}
  registerUser(){
    this.dataService.register(this.nombre, this.email, this.telefono, this.comentario)
    .then(()=>{this.respuesta="Añadido correctamente"})
    .catch(()=>{this.respuesta="No se pudo añadir, intentelo de nuevo"})
  }
  ngOnInit() {}

}
