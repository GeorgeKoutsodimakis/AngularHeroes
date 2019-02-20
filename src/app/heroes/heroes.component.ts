import { HeroService } from './../shared/hero.service';
import { Component, OnInit } from '@angular/core';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  constructor(private heroService: HeroService) {}
  heroes: Hero[];
  selectedHero: Hero;

  ngOnInit() {
    this.gerHeroes();
  }

  // onSelectHero(hero: Hero): void {
  //   this.selectedHero = hero;
  //   }

  gerHeroes(): void {
    this.heroService.getHeroes().subscribe(heroes => (this.heroes = heroes));
  }

}
