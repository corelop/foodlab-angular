import { Injectable } from '@angular/core';

// Firebase App (the core Firebase SDK) is always required and
// must be listed before other Firebase SDKs
import * as firebase from 'firebase/app';

// Add the Firebase services that you want to use
import 'firebase/auth';
import 'firebase/firestore';

@Injectable({
  providedIn: 'root',
})
export class FireBaseService {
  constructor() {}

  obtenerReceta(codReceta: number) {
    var database = firebase.default.database();
    return database.ref('/4/data/1/cod_receta');
    
  }
}
