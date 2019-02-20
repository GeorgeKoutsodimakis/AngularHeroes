import { Injectable } from '@angular/core';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor() {}

  getHeroes(): Observable<Hero[]> {
    return of(HEROES);
  }
}