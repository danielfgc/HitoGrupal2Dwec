import { Injectable } from '@angular/core';
import { AngularFirestore } from '@angular/fire/compat/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  constructor(private db: AngularFirestore) {}

  register(nombre: String, email:String, telefono:String,comentario:String){
    const usuarios = this.db.collection("usuarios");
    return usuarios.add({
      nombre: nombre,
      email: email, 
      telefono:telefono,
      comentario:comentario
      // Other info you want to add here
  })

  }
}
