import { HeroService } from './../shared/hero.service';
import { HEROES } from './../shared/mock-heroes';
import { Hero } from './../shared/hero';
import { Observable } from 'rxjs';
import { Component, OnInit } from '@angular/core';
import { Subject } from 'rxjs';
import { debounceTime, distinctUntilChanged, switchMap} from 'rxjs/operators';

@Component({
  selector: 'app-hero-search',
  templateUrl: './hero-search.component.html',
  styleUrls: ['./hero-search.component.css']
})
export class HeroSearchComponent implements OnInit {
  heroes$: Observable<Hero[]>;
  private searchtTerms = new Subject<string>();

  constructor(private heroService: HeroService) {}

  ngOnInit() {
    this.heroes$ = this.searchtTerms.pipe(
      debounceTime(300),
      distinctUntilChanged(),
      switchMap((term: string)=> this.heroService.searchHeroes(term))
    );
  }

  search(terms: string): void{
    this.searchtTerms.next(terms);
  }


}
