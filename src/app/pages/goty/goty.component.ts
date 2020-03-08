import { Component, OnInit } from '@angular/core';
import {GameService} from '../../services/game.service';
import {Game} from '../../interfaces/game';
import Swal from 'sweetalert2';
import {ok} from 'assert';

@Component({
  selector: 'app-goty',
  templateUrl: './goty.component.html',
  styleUrls: ['./goty.component.css']
})
export class GotyComponent implements OnInit {
  juegos: Game[] = [];
  constructor(private gameService: GameService) { }

  ngOnInit() {
    this.gameService.getNominados()
      .subscribe(resp => {
        console.log(resp);
        this.juegos = resp;
      });
  }

  votarJuego(juego: Game) {
    return this.gameService.votarJuego(juego.id)
      .subscribe((resp: {ok: boolean, mensaje: string}) => {
        if (resp.ok) {
          Swal.fire('Gracias', resp.mensaje, 'success');
        } else {
          Swal.fire('Error al votar', resp.mensaje, 'error');
        }
        console.log(resp);
      });
  }

}
