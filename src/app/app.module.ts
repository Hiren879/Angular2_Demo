import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }   from '@angular/forms';
import { AppComponent }  from './app.component';
import { HeroDetailComponent }  from './HeroModule/hero-detail.component';
import { HeroesComponent } from './HeroModule/heroes.component';
import { RouterModule } from '@angular/router';
import { DashboardComponent } from './Dashboard/dashboard.component';
import { HeroService } from './HeroModule/hero.service';
import { HttpModule } from '@angular/http';

@NgModule({
  imports: [
    BrowserModule,
    HttpModule,
    FormsModule,
    RouterModule.forRoot([
      {
        path : '',
        redirectTo : '/dashboard',
        pathMatch : 'full'
      },
      {
        path : 'heroes',
        component : HeroesComponent
      },
      {
        path : 'dashboard',
        component : DashboardComponent
      },
      {
        path : 'detail/:id',
        component : HeroDetailComponent
      }
    ])
  ],
  declarations: [
    AppComponent,
    HeroDetailComponent,
    HeroesComponent,
    DashboardComponent
  ],
  providers: [ HeroService ],
  bootstrap: [ AppComponent ]
})

export class AppModule { }