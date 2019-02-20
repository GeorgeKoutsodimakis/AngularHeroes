import { HttpClient, HttpHeaders } from '@angular/common/http';
import { MessageService } from './message.service';
import { Injectable } from '@angular/core';
import { Hero } from '../shared/hero';
import { HEROES } from '../shared/mock-heroes';
import { Observable, of } from 'rxjs';
import { catchError, map, tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class HeroService {
  private heroesUrl = 'api/heroes';

  httpOptions = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json'
    })
  };
  constructor(
    private messageService: MessageService,
    private http: HttpClient
  ) {}

  getHeroes(): Observable<Hero[]> {
    // this.messageService.addMessage('Heroes Fetched');
    // return of(HEROES);
    console.log('heroes fetched from get');
    return this.http.get<Hero[]>(this.heroesUrl);
    // .pipe(catchError(this.handleError('getHeroes',[])));
  }

  getHero(id: number): Observable<Hero> {
    this.messageService.addMessage(`Hero feched with id= ${id}`);
    const url = `${this.heroesUrl}/${id}`;
    // return of(HEROES.find(hero => hero.id === id));
    console.log('hero fetched from get');
    return this.http.get<Hero>(url);
  }
  private log(message: string) {
    this.messageService.addMessage(`Hero message: ${message}`);
  }

  updateHero(hero: Hero): Observable<any> {
    return this.http.put(this.heroesUrl, hero, this.httpOptions);
  }

  addHero(hero: Hero): Observable<Hero> {
    return this.http.post<Hero>(this.heroesUrl, hero, this.httpOptions);
  }

  deleteHero(hero: Hero | number): Observable<Hero> {
    const id = typeof hero === 'number' ? hero : hero.id;
    const url = `${this.heroesUrl}/${id}`;

    return this.http.delete<Hero>(url, this.httpOptions);
  }

  searchHeroes(term: string): Observable<Hero[]> {
    if (!term.trim()) {
      return of([]);
    }
    return this.http.get<Hero[]>(`${this.heroesUrl}/?name=${term}`);
  }
}
