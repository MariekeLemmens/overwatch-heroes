import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../hero";

@Component({
  selector: 'hero',
  host: { '(click)': 'onClick()'},
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  constructor() { }

  ngOnInit() {
  }

  private onClick() {
    console.log(this.hero.name + " clicked");
  }
}
