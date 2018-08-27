import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeroesComponent} from './components/heroes/heroes.component';
import {HeroComponent} from './components/hero/hero.component';
import {HeroDetailComponent} from './components/hero-detail/hero-detail.component';

import {HttpClientModule} from '@angular/common/http';

import {RouterModule, Routes} from '@angular/router';
import {HeroPageComponent} from './components/hero-page/hero-page.component';

const appRoutes: Routes = [
  {
    path:'',
    component:HeroesComponent
  },
  {
    path: 'hero/:id',
    component: HeroPageComponent
  },
];

@NgModule({
  declarations: [
    AppComponent,
    HeroesComponent,
    HeroComponent,
    HeroDetailComponent,
    HeroPageComponent
  ],
  imports: [
    RouterModule.forRoot(
      appRoutes,
    ),
    BrowserModule,
    HttpClientModule
  ],
  exports: [RouterModule],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule {
}
