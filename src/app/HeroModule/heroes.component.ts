import { Component } from '@angular/core';
import { OnInit } from '@angular/core';  
import { NgbModal } from '@ng-bootstrap/ng-bootstrap';

import { HeroService } from './hero.service';
import { HeroDetailModalComponent } from './hero-detail-modal.component';
import { Hero } from './hero';

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
              private modalService: NgbModal) {}

  ngOnInit(): void {
    this.getHeroes();
  }

  onSelect(hero : Hero) {
    this.selectedHero = hero;
  }

  getHeroes() : void {
    this.heroService.getHeroes().then(newHeroes => this.heroes = newHeroes);
  }

  gotoDetails() : void {
    
    const modalRef = this.modalService.open(HeroDetailModalComponent);
    //create copy of selected hero so that original hero doesn't get updated during update in modal
    modalRef.componentInstance.hero = Object.assign({}, this.selectedHero);
    modalRef.componentInstance.title = this.selectedHero.name;
    modalRef.result.then(
      (updatedHero) => {
        //edited hero save here and notify user and update in list as well
        console.log(updatedHero);
        this.selectedHero = updatedHero;
      },
      (cancelled) => {
        //modal cancelled
      }
    );
  }
}