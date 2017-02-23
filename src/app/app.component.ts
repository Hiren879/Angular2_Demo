import { Component } from '@angular/core';


@Component({
    moduleId: module.id,
    selector : 'my-app',
    template : `
            <h1>{{title}}</h1>
            <nav>
                <a routerLink="/dashboard">Dashboard</a>
                <a routerLink="/heroes">Heroes</a>
            </nav>
            <router-outlet></router-outlet>
            <template ngbModalContainer></template>
            `
})
//RouterOutlet is one of the directives provided by the RouterModule.


export class AppComponent {
    title = 'Let us take a tour of Heroes';
}