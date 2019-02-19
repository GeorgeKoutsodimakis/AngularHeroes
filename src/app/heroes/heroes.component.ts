import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes = HEROES;
  selectedHero: Hero;

  constructor() {}

  ngOnInit() {}

  onSelectHero(hero: Hero): void {
    this.selectedHero = hero;
  }
}
