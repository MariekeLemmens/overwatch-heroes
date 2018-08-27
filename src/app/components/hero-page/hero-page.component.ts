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

  constructor(private route: ActivatedRoute, private heroService:HeroService) {

  }

  ngOnInit() {
    let id = this.route.snapshot.params.id;

    this.heroService.getHero(id).then(resp => {
      this.hero = resp;
    })
  }

}
