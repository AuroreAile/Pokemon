import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  template: `<h1>Welcome to {{pokemonList[0]}}!</h1>`,
})
export class AppComponent implements OnInit {
  pokemonList: string[] = ['Bulbizarre', 'Salamèche', 'Carapuce'];

  ngOnInit(): void {
    console.table(this.pokemonList);
    this.selectPokemon('Bulbizarre')
  }


  selectPokemon(pokemonName: string): void {
    console.log(`Vous avez cliqué sur le pokémon ${pokemonName}`);
  }

}