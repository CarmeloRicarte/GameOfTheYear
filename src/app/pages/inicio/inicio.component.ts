import { Component, OnInit } from '@angular/core';
import { AngularFirestore } from '@angular/fire/firestore';
import 'firebase/firestore';
import {map} from 'rxjs/operators';
import {Game} from '../../interfaces/game';
@Component({
  selector: 'app-inicio',
  templateUrl: './inicio.component.html',
  styleUrls: ['./inicio.component.css']
})
export class InicioComponent implements OnInit {
  juegos: any[] = [];
  constructor(private db: AngularFirestore) { }

  ngOnInit(): void {
    this.db.collection('goty').valueChanges()
      .pipe(
        // transformamos el array de juegos en un array con un objeto
        // que contiene el nombre y los votos
        map( (resp: Game[]) => resp.map(({ nombre, votos}) => ({name: nombre, value: votos}) ))
      )
      .subscribe( resp => {
        this.juegos = resp;
      });
  }

}
