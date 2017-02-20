import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'; 
import { Hero } from './hero';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';
import 'rxjs/add/operator/map';

// @Injectable() lets Angular know that a class can be used with the dependency injector.
@Injectable()
export class HeroService {

    constructor(private http : Http) { }

    getHeroes(): Promise<Hero[]> {
        return Promise.resolve(HEROES);
    }
    getHeroesSlowly(): Promise<Hero[]> {
        return new Promise(resolve => {
            // Simulate server latency with 2 second delay
            setTimeout(() => resolve(this.getHeroes()), 2000);
        });
    }

    /**
     * return : Observable object of Hero[].
     * Caller can directly subscribe to this methoda and get Observable objecet to process futher
     * for result/error.
     */
    getHeroesREST() : Observable<Hero[]> {
        // http.get() : actually make a call to server.
        // .map(res => res.json()) : processes result sent from server.
        //      res : is ResponseData object which can be parsed as an blob(), text() or json() via helper method.
        //  
        return this.http.get('http://localhost:8080/SpringMVCDemo/heroes')
            .map((res : Response) => res.json())
            .catch((res : any) => Observable.throw(res.json()));
    }

    getHero(id : number) : Observable<Hero> {
        return this.getHeroesREST().map(heroes => heroes.find(hero => hero.id == id));

    }
}