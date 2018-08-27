import {Component, Input, OnInit} from '@angular/core';
import {Hero} from "../../hero";
import {Router} from '@angular/router';

@Component({
  selector: 'hero-detail',
  templateUrl: './hero-detail.component.html',
  styleUrls: ['./hero-detail.component.css']
})
export class HeroDetailComponent implements OnInit {
  @Input() hero: Hero;

  constructor(private router: Router) {
  }

  ngOnInit() {
  }

  infoClicked(id:number){
    this.router.navigateByUrl('/hero/' + id);
  }
}
