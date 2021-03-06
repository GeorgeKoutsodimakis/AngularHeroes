import { HEROES } from './../shared/mock-heroes';
import { HeroService } from './../shared/hero.service';
import { Component, OnInit, Input } from '@angular/core';
import { Hero } from '../shared/hero';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() selectedHero: Hero;

  constructor(
    private route: ActivatedRoute,
    private heroService: HeroService,
    private location: Location
  ) {}

  ngOnInit() {
    this.getHero();
  }

  getHero(): void {
    const id = +this.route.snapshot.paramMap.get('id');
    console.log(id);
    this.heroService.getHero(id).subscribe(hero => (this.selectedHero = hero));
  }

  onSave() {
    this.heroService.updateHero(this.selectedHero).subscribe(() => this.goBack());
  }

  goBack(): void {
    this.location.back();
  }
}
