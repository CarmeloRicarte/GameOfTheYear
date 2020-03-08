import { Injectable } from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {environment} from '../../environments/environment';
import {Game} from '../interfaces/game';
import {of} from 'rxjs';
import {catchError, tap} from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class GameService {
  private juegos: Game[] = [];

  constructor(private http: HttpClient) { }

  getNominados() {
    if (this.juegos.length > 0) {
      // usamos of para devolverlo como un Observable
      return of(this.juegos);
    } else {
      // pasamos la respuesta por un pipe para con tap, almacenar los juegos
      // en el array de juegos
      return this.http.get<Game[]>(`${environment.url}/api/goty`)
        .pipe(
          tap(
            juegos => this.juegos = juegos
          )
        );
    }
  }

  votarJuego(id: string) {
    return this.http.post(`${environment.url}/api/goty/${id}`, {})
      .pipe(
        // atrapamos el error si lo hubiese en la petición para luego manejarlo
        // en el componente
        catchError(err => {
          return of(err.error);
        })
      );
  }
}
