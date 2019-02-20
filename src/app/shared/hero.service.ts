import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';
import { Observable, of } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  constructor(private messageService: MessageService) {}

  getHeroes(): Observable<Hero[]> {
    this.messageService.addMessage('Heroes Fetched');
    return of(HEROES);
  }

  getHero(id: number): Observable<Hero>{
    this.messageService.addMessage(`Hero feched with id= ${id}`);
    return of(HEROES.find(hero => hero.id === id));
  }
}
