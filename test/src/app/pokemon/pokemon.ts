import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError, finalize } from 'rxjs/operators';
import { of } from 'rxjs';
import { PokemonSearch } from './pokemon-search/pokemon-search';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, HttpClientModule, PokemonSearch],
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css']
})
export class Pokemon {
  pokemonData: any = null;
  error: string | null = null;
  loading = false;

  constructor(private http: HttpClient) {}

  onSearch(name: string) {
    this.loading = true;
    this.error = null;
    this.pokemonData = null;

    this.http.get(`https://pokeapi.co/api/v2/pokemon/${name}`)
      .pipe(
        catchError(() => {
          this.error = 'Pokemon not found or error fetching data.';
          return of(null);
        }),
        finalize(() => this.loading = false)
      )
      .subscribe(data => {
        this.pokemonData = data;
      });
  }
}
