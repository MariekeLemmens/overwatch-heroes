import {Component, EventEmitter, Input, OnInit, Output} from '@angular/core';
import {Hero} from "../../hero";

@Component({
  selector: 'hero',
  host: {'(click)': 'onClick()'},
  templateUrl: './hero.component.html',
  styleUrls: ['./hero.component.css']
})
export class HeroComponent implements OnInit {
  @Input() hero: Hero;
  @Output() heroSelected: EventEmitter<number> = new EventEmitter();

  constructor() {
  }

  ngOnInit() {
  }

  private onClick() {
    this.heroSelected.emit(this.hero.id);
  }
}
