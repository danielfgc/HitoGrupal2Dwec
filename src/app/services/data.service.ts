import { Injectable } from '@angular/core';
import { AngularFireDatabase } from 'angularfire2/database';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore: AngularFireDatabase) {}
  register(nombre: String, email:String, telefono:String,comentario:String){
    return this.fireStore.list('usuarios').push({
      nombre: nombre,
      email: email,
      telefono:telefono,
      comentario:comentario
      // Other info you want to add here
    });
  }
}
