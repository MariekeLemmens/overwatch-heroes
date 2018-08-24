(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncaught exception popping up in devtools
	return Promise.resolve().then(function() {
		var e = new Error('Cannot find module "' + req + '".');
		e.code = 'MODULE_NOT_FOUND';
		throw e;
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".app {\r\n  position: relative;\r\n  height: 100vh;\r\n  top: 0;\r\n  bottom: 0;\r\n  left: 0;\r\n  right: 0;\r\n}\r\n\r\n.banner {\r\n  height: 60px;\r\n  display: flex;\r\n  background: rgba(11, 13, 18, 0.8);\r\n  color: #fafafa;\r\n  text-align: center;\r\n  justify-content: center;\r\n  align-items: center;\r\n  padding: 10px;\r\n}\r\n\r\n#logo {\r\n  padding: 5px;\r\n  max-width:75%;\r\n  max-height:75%;\r\n  height: auto;\r\n  width: auto;\r\n}\r\n"

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!--The content below is only a placeholder and can be replaced.-->\n<div class=\"app\">\n  <div class=\"banner\">\n    <img id=\"logo\" src=\"http://www.stickpng.com/assets/images/586273b931349e0568ad89df.png\" alt=\"logo\">\n    <h1>\n      {{ title }}\n    </h1>\n  </div>\n  <app-heroes></app-heroes>\n</div>\n\n"

/***/ }),

/***/ "./src/app/app.component.ts":
/*!**********************************!*\
  !*** ./src/app/app.component.ts ***!
  \**********************************/
/*! exports provided: AppComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppComponent", function() { return AppComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = /** @class */ (function () {
    function AppComponent() {
        this.title = 'Overwatch Heroes';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")],
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/app.module.ts":
/*!*******************************!*\
  !*** ./src/app/app.module.ts ***!
  \*******************************/
/*! exports provided: AppModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AppModule", function() { return AppModule; });
/* harmony import */ var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/platform-browser */ "./node_modules/@angular/platform-browser/fesm5/platform-browser.js");
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _app_component__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app.component */ "./src/app/app.component.ts");
/* harmony import */ var _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./components/heroes/heroes.component */ "./src/app/components/heroes/heroes.component.ts");
/* harmony import */ var _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/hero/hero.component */ "./src/app/components/hero/hero.component.ts");
/* harmony import */ var _components_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/hero-detail/hero-detail.component */ "./src/app/components/hero-detail/hero-detail.component.ts");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};







var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _components_heroes_heroes_component__WEBPACK_IMPORTED_MODULE_3__["HeroesComponent"],
                _components_hero_hero_component__WEBPACK_IMPORTED_MODULE_4__["HeroComponent"],
                _components_hero_detail_hero_detail_component__WEBPACK_IMPORTED_MODULE_5__["HeroDetailComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"],
                _angular_common_http__WEBPACK_IMPORTED_MODULE_6__["HttpClientModule"]
            ],
            providers: [],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/hero-detail/hero-detail.component.css":
/*!******************************************************************!*\
  !*** ./src/app/components/hero-detail/hero-detail.component.css ***!
  \******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "#hero-container {\r\n  margin: -10px 10px 10px;\r\n  width: 220px;\r\n}\r\n\r\n#arrow-up {\r\n  width: 0;\r\n  height: 0;\r\n  border-left: 7px solid transparent;\r\n  border-right: 7px solid transparent;\r\n  border-bottom: 10px solid rgba(11, 13, 18, 0.75);\r\n}\r\n\r\n#hero-detail {\r\n  background: rgba(11, 13, 18, 0.75);\r\n  color: #fafafa;\r\n  padding: 10px;\r\n}\r\n\r\n#hero-description{\r\n  font-size: 75%;\r\n}\r\n\r\n\r\n"

/***/ }),

/***/ "./src/app/components/hero-detail/hero-detail.component.html":
/*!*******************************************************************!*\
  !*** ./src/app/components/hero-detail/hero-detail.component.html ***!
  \*******************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div id=\"hero-container\">\n  <div id=\"arrow-up\"></div>\n  <div id=\"hero-detail\">\n    <div>{{hero.real_name}} - ({{hero.name}})</div>\n    <div id=\"hero-description\">{{hero.description}}</div>\n  </div>\n</div>\n"

/***/ }),

/***/ "./src/app/components/hero-detail/hero-detail.component.ts":
/*!*****************************************************************!*\
  !*** ./src/app/components/hero-detail/hero-detail.component.ts ***!
  \*****************************************************************/
/*! exports provided: HeroDetailComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroDetailComponent", function() { return HeroDetailComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hero */ "./src/app/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroDetailComponent = /** @class */ (function () {
    function HeroDetailComponent() {
    }
    HeroDetailComponent.prototype.ngOnInit = function () {
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], HeroDetailComponent.prototype, "hero", void 0);
    HeroDetailComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero-detail',
            template: __webpack_require__(/*! ./hero-detail.component.html */ "./src/app/components/hero-detail/hero-detail.component.html"),
            styles: [__webpack_require__(/*! ./hero-detail.component.css */ "./src/app/components/hero-detail/hero-detail.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroDetailComponent);
    return HeroDetailComponent;
}());



/***/ }),

/***/ "./src/app/components/hero/hero.component.css":
/*!****************************************************!*\
  !*** ./src/app/components/hero/hero.component.css ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".hero {\r\n  display: flex;\r\n  margin: 10px;\r\n  padding: 10px;\r\n  background: rgba(11, 13, 18, 0.75);\r\n  color: #fafafa;\r\n  height: 125px;\r\n  width: 200px;\r\n  align-items: center;\r\n}\r\n\r\n#hero-image{\r\n  padding: 5px;\r\n  height: auto;\r\n  width: 50%;\r\n  -ms-grid-column-align: right;\r\n      justify-self: right;\r\n}\r\n\r\n#hero-details {\r\n  padding: 5px;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/hero/hero.component.html":
/*!*****************************************************!*\
  !*** ./src/app/components/hero/hero.component.html ***!
  \*****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"hero\">\r\n  <img id=\"hero-image\" src=\"{{hero.image}}\" alt=\"hero-icon\">\r\n  <div id=\"hero-details\">\r\n    <div>{{hero.name}}</div>\r\n    <div>Age: {{hero.age}}</div>\r\n  </div>\r\n</div>\r\n"

/***/ }),

/***/ "./src/app/components/hero/hero.component.ts":
/*!***************************************************!*\
  !*** ./src/app/components/hero/hero.component.ts ***!
  \***************************************************/
/*! exports provided: HeroComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroComponent", function() { return HeroComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hero */ "./src/app/hero.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroComponent = /** @class */ (function () {
    function HeroComponent() {
        this.heroSelected = new _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"]();
    }
    HeroComponent.prototype.ngOnInit = function () {
    };
    HeroComponent.prototype.onClick = function () {
        this.heroSelected.emit(this.hero.id);
    };
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Input"])(),
        __metadata("design:type", _hero__WEBPACK_IMPORTED_MODULE_1__["Hero"])
    ], HeroComponent.prototype, "hero", void 0);
    __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Output"])(),
        __metadata("design:type", _angular_core__WEBPACK_IMPORTED_MODULE_0__["EventEmitter"])
    ], HeroComponent.prototype, "heroSelected", void 0);
    HeroComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'hero',
            host: { '(click)': 'onClick()' },
            template: __webpack_require__(/*! ./hero.component.html */ "./src/app/components/hero/hero.component.html"),
            styles: [__webpack_require__(/*! ./hero.component.css */ "./src/app/components/hero/hero.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], HeroComponent);
    return HeroComponent;
}());



/***/ }),

/***/ "./src/app/components/heroes/heroes.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".heroes {\r\n  list-style: none;\r\n  display: inline-flex;\r\n  flex-wrap: wrap;\r\n  justify-content: center;\r\n}\r\n\r\n.heroes::after {\r\n  content : \"\";\r\n  display: block;\r\n  position: absolute;\r\n  top: 0;\r\n  left: 0;\r\n  background-size: cover;\r\n  background: url(\"https://i.imgur.com/qZFfhos.jpg\") no-repeat center center fixed;\r\n  opacity : 0.75;\r\n  z-index: -1;\r\n  width: 100%;\r\n  height: 175%;\r\n}\r\n\r\n.hero:hover {\r\n  cursor: pointer;\r\n}\r\n"

/***/ }),

/***/ "./src/app/components/heroes/heroes.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<ul class=\"heroes\">\n  <li *ngFor=\"let hero of heroes\" class=\"hero\">\n    <hero [hero]=\"hero\" (heroSelected)=\"heroSelectedHandler($event)\"></hero>\n    <hero-detail [hero]=\"hero\" *ngIf=\"hero.id==selectedHeroId\"></hero-detail>\n  </li>\n</ul>\n"

/***/ }),

/***/ "./src/app/components/heroes/heroes.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/heroes/heroes.component.ts ***!
  \*******************************************************/
/*! exports provided: HeroesComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroesComponent", function() { return HeroesComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _hero_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../hero.service */ "./src/app/hero.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroesComponent = /** @class */ (function () {
    function HeroesComponent(heroService) {
        this.heroService = heroService;
    }
    HeroesComponent.prototype.ngOnInit = function () {
        this.getHeroes();
    };
    HeroesComponent.prototype.getHeroes = function () {
        var _this = this;
        this.heroService.getHeroes().then(function (resp) {
            _this.heroes = resp.data;
            _this.getHeroImages();
            _this.sortHeroes();
        });
    };
    HeroesComponent.prototype.getHeroImages = function () {
        var images = _hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"].getHeroImages();
        for (var hero in this.heroes) {
            this.heroes[hero].image = images[hero];
        }
    };
    HeroesComponent.prototype.sortHeroes = function () {
        function compare(a, b) {
            if (a.name < b.name)
                return -1;
            if (a.name > b.name)
                return 1;
            return 0;
        }
        this.heroes.sort(compare);
    };
    HeroesComponent.prototype.heroSelectedHandler = function (heroId) {
        if (this.selectedHeroId == heroId) {
            this.selectedHeroId = null;
        }
        else {
            this.selectedHeroId = heroId;
        }
    };
    HeroesComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-heroes',
            template: __webpack_require__(/*! ./heroes.component.html */ "./src/app/components/heroes/heroes.component.html"),
            styles: [__webpack_require__(/*! ./heroes.component.css */ "./src/app/components/heroes/heroes.component.css")]
        }),
        __metadata("design:paramtypes", [_hero_service__WEBPACK_IMPORTED_MODULE_1__["HeroService"]])
    ], HeroesComponent);
    return HeroesComponent;
}());



/***/ }),

/***/ "./src/app/hero.service.ts":
/*!*********************************!*\
  !*** ./src/app/hero.service.ts ***!
  \*********************************/
/*! exports provided: HeroService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "HeroService", function() { return HeroService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HeroService = /** @class */ (function () {
    function HeroService(http) {
        this.http = http;
    }
    HeroService.prototype.ngOnInit = function () {
    };
    HeroService.prototype.getHeroes = function () {
        return this.http
            .get('https://overwatch-api.net/api/v1/hero')
            .toPromise();
        /*return [
          {name: 'Lucio', class: 'Support'},
          {name: 'Ana', class: 'Support'},
          {name: 'Mercy', class: 'Support'},
          {name: 'Bischuitta', class: 'Support'},
          {name: 'Zenyatta', class: 'Support'},
          {name: 'Moira', class: 'Support'},
          {name: 'Reinhardt', class: 'Tank'},
          {name: 'Zarya', class: 'Tank'},
          {name: 'Roadhog', class: 'Tank'},
          {name: 'Orisa', class: 'Tank'},
          {name: 'D.va', class: 'Tank'},
          {name: 'Winston', class: 'Tank'},
          {name: 'Bastion', class: 'Damage'},
          {name: 'Doomfist', class: 'Damage'},
          {name: 'Genji', class: 'Damage'},
          {name: 'Hanzo', class: 'Damage'},
          {name: 'Junkrat', class: 'Damage'},
          {name: 'Mccree', class: 'Damage'},
          {name: 'Mei', class: 'Damage'},
          {name: 'Phara', class: 'Damage'},
          {name: 'Reaper', class: 'Damage'},
          {name: 'Soldier', class: 'Damage'},
          {name: 'Sombra', class: 'Damage'},
          {name: 'Symmetra', class: 'Damage'},
          {name: 'Toblerone', class: 'Damage'},
          {name: 'Tracer', class: 'Damage'},
          {name: 'Widowmaker', class: 'Damage'},
        ]*/
    };
    HeroService.getHeroImages = function () {
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
    };
    HeroService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], HeroService);
    return HeroService;
}());



/***/ }),

/***/ "./src/app/hero.ts":
/*!*************************!*\
  !*** ./src/app/hero.ts ***!
  \*************************/
/*! exports provided: Hero */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Hero", function() { return Hero; });
var Hero = /** @class */ (function () {
    function Hero() {
    }
    return Hero;
}());



/***/ }),

/***/ "./src/environments/environment.ts":
/*!*****************************************!*\
  !*** ./src/environments/environment.ts ***!
  \*****************************************/
/*! exports provided: environment */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "environment", function() { return environment; });
// This file can be replaced during build by using the `fileReplacements` array.
// `ng build ---prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * In development mode, to ignore zone related error stack frames such as
 * `zone.run`, `zoneDelegate.invokeTask` for easier debugging, you can
 * import the following file, but please comment it out in production mode
 * because it will have performance impact when throw error
 */
// import 'zone.js/dist/zone-error';  // Included with Angular CLI.


/***/ }),

/***/ "./src/main.ts":
/*!*********************!*\
  !*** ./src/main.ts ***!
  \*********************/
/*! no exports provided */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/platform-browser-dynamic */ "./node_modules/@angular/platform-browser-dynamic/fesm5/platform-browser-dynamic.js");
/* harmony import */ var _app_app_module__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./app/app.module */ "./src/app/app.module.ts");
/* harmony import */ var _environments_environment__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./environments/environment */ "./src/environments/environment.ts");




if (_environments_environment__WEBPACK_IMPORTED_MODULE_3__["environment"].production) {
    Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["enableProdMode"])();
}
Object(_angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_1__["platformBrowserDynamic"])().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_2__["AppModule"])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! D:\Users\marie\Documents\Angular\StarStruck\starstruck\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map