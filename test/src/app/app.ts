import { Component } from '@angular/core';
import { Todo } from './todo/todo';
import { Pokemon } from './pokemon/pokemon';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Todo, Pokemon],
  templateUrl: './app.html',
  styleUrls: ['./app.css']
})
export class App {}
