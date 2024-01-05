import { Component, OnInit } from '@angular/core';0
import { POKEMONS } from './mock-pokemon-list';
import { Pokemon } from './pokemon';

@Component({
  selector: 'app-root',
  template: `<h1>Liste des Pokémons</h1>`,
})
export class AppComponent implements OnInit {
  pokemonList: Pokemon [] = POKEMONS;

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon(this.pokemonList[3]);
  }


  selectPokemon(pokemon: Pokemon): void {
    console.log(`Vous avez cliqué sur le pokémon ${pokemon.name}`);
  }

}