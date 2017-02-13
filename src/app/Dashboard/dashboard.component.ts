import { Component } from '@angular/core';
import { HeroService } from '../HeroModule/hero.service';
import { Hero } from '../HeroModule/hero';
import { OnInit } from '@angular/core';

@Component({
    moduleId : module.id,
    selector : 'my-dashboard',
    templateUrl : 'dashboard.component.html',
})

export class DashboardComponent implements OnInit {
    heroes: Hero[] = [];

    constructor(private heroService : HeroService) { }

    ngOnInit() : void {
        this.heroService.getHeroesREST().subscribe(newHeroes => this.heroes = newHeroes,
        err => {
            console.log(err);
        }
     );
        //this.heroService.getHeroes().then(heroes => this.heroes = heroes.slice(1,5));
    }

}