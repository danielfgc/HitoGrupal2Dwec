import { Injectable } from '@angular/core';
import { AngularFirestore } from 'angularfire2/firestore';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor(private fireStore: AngularFirestore) {}
  register(nombre: String, password:)
}
