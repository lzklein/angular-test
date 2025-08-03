import { Component, EventEmitter, Output } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule, FormBuilder, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-pokemon-search',
  standalone: true,
  imports: [CommonModule, FormsModule, ReactiveFormsModule],
  templateUrl: './pokemon-search.html',
})
export class PokemonSearch {
  @Output() search = new EventEmitter<string>();

  form: FormGroup;

  constructor(private fb: FormBuilder) {
    this.form = this.fb.group({
      pokemonName: ['', [Validators.required, Validators.pattern('^[a-zA-Z]+$')]]
    });
  }

  onSubmit() {
    if (this.form.valid) {
      this.search.emit(this.form.value.pokemonName.toLowerCase());
    }
  }
}
