import { Component } from '@angular/core';
import { Hero } from './hero';
import { OnInit } from '@angular/core';
import { HeroService } from './hero.service';
import { Router } from '@angular/router';

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
  constructor (private heroService : HeroService,
               private router : Router) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero : Hero) {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroesREST().subscribe(newHeroes => this.heroes = newHeroes);
  }

  gotoDetails() : void {
    this.router.navigate(['/detail',this.selectedHero.id]);
  }
}