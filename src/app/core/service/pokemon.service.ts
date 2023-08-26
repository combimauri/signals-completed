import { HttpClient } from '@angular/common/http';
import { Injectable, inject } from '@angular/core';
import { loadEffect } from '../function/load-effect';
import { Observable, map } from 'rxjs';

@Injectable({
  providedIn: 'root',
})
export class PokemonService {
  private http = inject(HttpClient);
  private loadEffect = loadEffect();

  getPokemonImage(pokeNumber: number): Observable<unknown> {
    return this.http
      .get<any>(`https://pokeapi.co/api/v2/pokemon/${pokeNumber}`)
      .pipe(
        map((pokemon) => pokemon.sprites.front_default),
        this.loadEffect,
      );
  }
}
