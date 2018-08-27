import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HeroService {

  constructor(private http: HttpClient) {
  }

  ngOnInit() {

  }

  getHeroes(): Promise<any> {
    return this.http
      .get('https://overwatch-api.net/api/v1/hero')
      .toPromise();
  }

  getHero(id:number): Promise<any>{
    return this.http
      .get('https://overwatch-api.net/api/v1/hero/' + id)
      .toPromise();
  }

  static getHeroImages(): string[] {
    return [
      "https://www.eclypsia.com/content/Overwatch/Ic%C3%B4nes%20h%C3%A9ros/ana_icon.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/1/1e/Icon-portrait-hexagon.07nsM.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/5/5b/DVa_Profile_Picture.png",
      "http://media.blizzard.com/overwatch/hero/genji/icon-portrait-hexagon.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/e/e6/Icon-portrait-hexagon.0AUxZ.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/a/a2/Junkrat_Portrait.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/0/08/Icon-portrait-hexagon.3CV6U.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/8/8b/McCree.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/4/41/Mei_Profile_Picture.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/2/26/Icon-portrait-hexagon.0Etul.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/5/5b/Icon-portrait-hexagon.4HyvC.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/5/5c/Icon-portrait-hexagon.4Vowj.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/8/82/Icon-portrait-hexagon.3MXIZ.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/2/21/Roadhog_portrait.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/f/f0/Icon-portrait-hexagon.3XqIU.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/0/0c/Icon-portrait-hexagon.1pA5Q.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/b/b1/Icon-portrait-hexagon.4TciV.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/4/48/Icon-portrait-hexagon.0uJzL.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/4/45/Icon-portrait-hexagon.1dCOr.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/7/7b/Icon-portrait-hexagon.0B2ix.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/1/17/Zarya.png",
      "https://vignette.wikia.nocookie.net/overwatch/images/1/16/Icon-portrait-hexagon.1Gmx7.png",
      "https://www.overwatch.cz/images/93451/jd8aer7srpcxy4p_1493224924.png",
      "https://i.imgur.com/GvK0Pj6.png",
    ];
  }
}
