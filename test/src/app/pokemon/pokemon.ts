import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { catchError } from 'rxjs/operators';
import { of } from 'rxjs';

@Component({
  selector: 'app-pokemon',
  standalone: true,
  imports: [CommonModule, HttpClientModule],
  templateUrl: './pokemon.html',
  styleUrls: ['./pokemon.css']
})
export class Pokemon implements OnInit {
  pokemonData: any = null;
  error: string | null = null;

  constructor(private http: HttpClient) {}

  ngOnInit() {
    this.http.get('https://pokeapi.co/api/v2/pokemon/ditto')
      .pipe(
        catchError(err => {
          this.error = 'Failed to load data';
          return of(null);
        })
      )
      .subscribe(data => {
        this.pokemonData = data;
      });
  }
}
