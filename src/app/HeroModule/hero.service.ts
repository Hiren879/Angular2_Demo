import { Injectable } from '@angular/core';
import { HEROES } from './mock-heroes'; 
import { Hero } from './hero';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Rx';

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

    getHeroesREST() : Observable<Hero[]> {
        return this.http.get('http://localhost:8080/SpringMVCDemo/heroes')
            .map((res:Response) => res.json())
            .catch((error:any) => Observable.throw(error.json().error || 'Server error'));
    }
}