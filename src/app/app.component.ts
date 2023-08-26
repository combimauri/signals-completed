import { AsyncPipe, CommonModule, NgFor, NgIf } from '@angular/common';
import { Component, inject } from '@angular/core';
import { MatButtonModule } from '@angular/material/button';
import { MatProgressBarModule } from '@angular/material/progress-bar';
import { Observable } from 'rxjs';
import { PokemonService } from './core/service/pokemon.service';
import { SpinnerComponent } from './spinner/spinner.component';

@Component({
  selector: 'io-root',
  standalone: true,
  imports: [
    AsyncPipe,
    CommonModule,
    MatButtonModule,
    MatProgressBarModule,
    NgFor,
    NgIf,
    SpinnerComponent,
  ],
  template: `
    <io-spinner></io-spinner>

    <div class="container">
      <button mat-raised-button (click)="addPokemon(1)">
        ¡Bulbasaur yo te elijo!
      </button>
      <button mat-raised-button (click)="addPokemon(4)">
        ¡Charmander yo te elijo!
      </button>
      <button mat-raised-button (click)="addPokemon(7)">
        ¡Squirtle yo te elijo!
      </button>

      <ng-container *ngFor="let pokemon$ of pokemons">
        <img
          *ngIf="pokemon$ | async as pokemon"
          [src]="pokemon"
          alt="Imágen de un pokémon"
        />
      </ng-container>
    </div>
  `,
  styles: [
    `
      .container {
        display: flex;
        flex-direction: column;
        align-items: center;
        gap: 10px;
        padding: 15px;

        button {
          width: 300px;
          max-width: 100%;
        }
      }
    `,
  ],
})
export class AppComponent {
  pokemons: Observable<unknown>[] = [];

  private pokeService = inject(PokemonService);

  addPokemon(pokeNumber: number): void {
    const pokemon$ = this.pokeService.getPokemonImage(pokeNumber);
    this.pokemons = [...this.pokemons, pokemon$];
  }
}
