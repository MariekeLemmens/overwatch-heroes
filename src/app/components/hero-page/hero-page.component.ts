import {Component, OnInit} from '@angular/core';
import {Hero} from "../../hero";
import {ActivatedRoute} from "@angular/router";
import {HeroService} from "../../hero.service";

@Component({
  selector: 'app-hero-page',
  templateUrl: './hero-page.component.html',
  styleUrls: ['./hero-page.component.css']
})
export class HeroPageComponent implements OnInit {
  hero: Hero;

  constructor(private route: ActivatedRoute, private heroService: HeroService) {

  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;
    this.heroService.getHero(id).then(resp => {
      this.hero = resp;
      this.hero.image = this.heroService.getHeroImages()[id - 1];

      switch (this.hero.role.id) {
        case 1: {
          this.hero.icon = "https://png.icons8.com/ios/100/2980b9/sword-filled.png"
          break;
        }
        case 2: {
          this.hero.icon = "https://png.icons8.com/ios/100/2980b9/sword-filled.png"
          break;
        }
        case 3: {
          this.hero.icon = "https://png.icons8.com/ios-glyphs/40/2980b9/shield.png";
          break;
        }
        case 4: {
          this.hero.icon = "https://png.icons8.com/flat_round/100/2980b9/plus.png";
          break;
        }


      }
    });
  }

}
