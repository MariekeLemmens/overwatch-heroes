import {Component, OnInit} from '@angular/core';
import {HeroService} from "../../hero.service";
import {Hero} from "../../hero";

@Component({
  selector: 'app-heroes',
  templateUrl: './heroes.component.html',
  styleUrls: ['./heroes.component.css']
})
export class HeroesComponent implements OnInit {
  heroes: Hero[];

  constructor(private heroService: HeroService) {
  }

  ngOnInit() {
    this.getHeroes();
  }

  getHeroes() {
    this.heroService.getHeroes().then(resp => {
        this.heroes = resp.data;
        this.getHeroImages();
        this.sortHeroes();
      }
    );
  }

  getHeroImages() {
    let images = HeroService.getHeroImages();
    for (let hero in this.heroes) {
      this.heroes[hero].image = images[hero]
    }
  }

  sortHeroes(){
    function compare(a,b) {
      if (a.name < b.name)
        return -1;
      if (a.name > b.name)
        return 1;
      return 0;
    }

    this.heroes.sort(compare);
  }
}
