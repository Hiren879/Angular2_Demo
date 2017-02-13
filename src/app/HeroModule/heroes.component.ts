import { Component } from '@angular/core';
import { Hero } from './hero';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';

@Component({
  moduleId: module.id,
  selector: 'my-heroes',
  templateUrl : 'heroes.component.html',
  styleUrls: ['heroes.component.css'],
})

export class HeroesComponent implements OnInit { 
  selectedHero : Hero;
  heroes : Hero[];

  // constructor for heroService
  constructor (private heroService : HeroService) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  /**
   * setting selectedHero property from app.component.html
   */
  onSelect(hero : Hero) {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(heroes => this.heroes = heroes);
  }
}