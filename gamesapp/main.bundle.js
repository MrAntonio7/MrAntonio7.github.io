webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/about/about.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/about/about.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li id=\"root\" class=\"breadcrumb-item active\" aria-current=\"page\">GameApp</li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/home']\">Home</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">About</li>\n        </ol>\n    </nav>\n    <h1 class=\"my-4\">About\n        <small class=\"text-50\">me</small>\n    </h1>\n    <hr>\n    <div class=\"row\">\n\n        <div class=\"col-md-6\">\n            <img class=\"img-fluid\" src=\"assets/img/milogo_negativo.png\" alt=\"Me\">\n        </div>\n\n        <div class=\"col-md-6\">\n            <h3 class=\"my-3\">Project Description <small class=\"text-50\"><strong>GameApp</strong> </small></h3>\n            <p>Project developed with Angular by Antonio Jesús Álvarez Malagón.\n            </p>\n            <h6>APIs used: </h6>\n            <ul>\n                <li>http://wiki.thegamesdb.net/index.php?title=API_Introduction</li>\n                <li>http://mydemos.in/chatbot/index.php?msg=$variable</li>\n            </ul>\n            <h6>Techniques used: </h6>\n            <ul>\n                <li>Angular 5</li>\n                <li>Bootstrap 4</li>\n                <li>Services (shared components, HttpClient...)</li>\n                <li>Pipes (filters)</li>\n                <li>Routes</li>\n                <li>Directives</li>\n                <li>Interfaces</li>\n                <li>Observables</li>\n                <li>And others...</li>\n            </ul>\n            <hr>\n            <h3 class=\"my-3\">Social</h3>\n            <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn pt-1 pb-1 pl-3 pr-3 mb-1\"><i class=\"fa fa-twitter\" aria-hidden=\"true\"></i></button>\n            <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn pt-1 pb-1 pl-3 pr-3 mb-1\">&nbsp;<i class=\"fa fa-facebook\" aria-hidden=\"true\"></i></button>\n            <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn pt-1 pb-1 pl-3 pr-3 mb-1\"><i class=\"fa fa-github\" aria-hidden=\"true\"></i></button>\n            <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn pt-1 pb-1 pl-3 pr-3 mb-1\"><i class=\"fa fa-instagram\" aria-hidden=\"true\"></i></button>\n            <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn pt-1 pb-1 pl-3 pr-3 mb-1\"><i class=\"fa fa-linkedin\" aria-hidden=\"true\"></i></button>\n            <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn pt-1 pb-1 pl-3 pr-3 mb-1\"><i class=\"fa fa-envelope\" aria-hidden=\"true\"></i></button>\n        </div>\n\n    </div>"

/***/ }),

/***/ "../../../../../src/app/about/about.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AboutComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var AboutComponent = (function () {
    function AboutComponent(_shared) {
        this._shared = _shared;
        this.classButton = 'btn-primary';
    }
    AboutComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueStyle = this._shared.theme;
        this.setThemeButtons();
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setThemeButtons();
        });
    };
    AboutComponent.prototype.setThemeButtons = function () {
        if (this.valueStyle == 'Playstation') {
            this.classButton = 'btn-primary';
        }
        else if (this.valueStyle == 'Xbox') {
            this.classButton = 'btn-success';
        }
        else if (this.valueStyle == 'Nintendo') {
            this.classButton = 'btn-danger';
        }
    };
    AboutComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-about',
            template: __webpack_require__("../../../../../src/app/about/about.component.html"),
            styles: [__webpack_require__("../../../../../src/app/about/about.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], AboutComponent);
    return AboutComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app-routing.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppRoutingModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common__ = __webpack_require__("../../../common/esm5/common.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__plataforms_plataforms_component__ = __webpack_require__("../../../../../src/app/plataforms/plataforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__games_games_component__ = __webpack_require__("../../../../../src/app/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__plataform_plataform_component__ = __webpack_require__("../../../../../src/app/plataform/plataform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};










var ROUTES = [
    { path: 'home', component: __WEBPACK_IMPORTED_MODULE_3__home_home_component__["a" /* HomeComponent */] },
    { path: 'plataforms', component: __WEBPACK_IMPORTED_MODULE_4__plataforms_plataforms_component__["a" /* PlataformsComponent */] },
    { path: 'games', component: __WEBPACK_IMPORTED_MODULE_5__games_games_component__["a" /* GamesComponent */] },
    { path: 'about', component: __WEBPACK_IMPORTED_MODULE_7__about_about_component__["a" /* AboutComponent */] },
    { path: 'contact', component: __WEBPACK_IMPORTED_MODULE_6__contact_contact_component__["a" /* ContactComponent */] },
    { path: 'plataform/:id', component: __WEBPACK_IMPORTED_MODULE_8__plataform_plataform_component__["a" /* PlataformComponent */] },
    { path: 'game/:id', component: __WEBPACK_IMPORTED_MODULE_9__game_game_component__["a" /* GameComponent */] },
    { path: '', pathMatch: 'full', redirectTo: 'home' },
    { path: '**', pathMatch: 'full', redirectTo: 'home' }
];
var AppRoutingModule = (function () {
    function AppRoutingModule() {
    }
    AppRoutingModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["I" /* NgModule */])({
            exports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */]],
            imports: [__WEBPACK_IMPORTED_MODULE_2__angular_router__["b" /* RouterModule */].forRoot(ROUTES, { useHash: true }), __WEBPACK_IMPORTED_MODULE_1__angular_common__["b" /* CommonModule */]],
            declarations: []
        })
    ], AppRoutingModule);
    return AppRoutingModule;
}());



/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>\n\n<router-outlet></router-outlet>\n\n<app-footer></app-footer>"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var AppComponent = (function () {
    function AppComponent() {
        this.title = 'app';
    }
    AppComponent.prototype.setTheme = function ($event) {
        this.theme = $event;
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__request_service__ = __webpack_require__("../../../../../src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__chatbot_service__ = __webpack_require__("../../../../../src/app/chatbot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__ = __webpack_require__("../../../../../src/app/navbar/navbar.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__ = __webpack_require__("../../../../../src/app/footer/footer.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__app_routing_module__ = __webpack_require__("../../../../../src/app/app-routing.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12__games_games_component__ = __webpack_require__("../../../../../src/app/games/games.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_13__plataforms_plataforms_component__ = __webpack_require__("../../../../../src/app/plataforms/plataforms.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_14__about_about_component__ = __webpack_require__("../../../../../src/app/about/about.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_16__sinfoto_pipe__ = __webpack_require__("../../../../../src/app/sinfoto.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_17__searchfilter_pipe__ = __webpack_require__("../../../../../src/app/searchfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_18__plataform_plataform_component__ = __webpack_require__("../../../../../src/app/plataform/plataform.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_19__game_game_component__ = __webpack_require__("../../../../../src/app/game/game.component.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};




















var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_8__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_9__navbar_navbar_component__["a" /* NavbarComponent */],
                __WEBPACK_IMPORTED_MODULE_10__footer_footer_component__["a" /* FooterComponent */],
                __WEBPACK_IMPORTED_MODULE_12__games_games_component__["a" /* GamesComponent */],
                __WEBPACK_IMPORTED_MODULE_13__plataforms_plataforms_component__["a" /* PlataformsComponent */],
                __WEBPACK_IMPORTED_MODULE_14__about_about_component__["a" /* AboutComponent */],
                __WEBPACK_IMPORTED_MODULE_15__contact_contact_component__["a" /* ContactComponent */],
                __WEBPACK_IMPORTED_MODULE_16__sinfoto_pipe__["a" /* SinfotoPipe */],
                __WEBPACK_IMPORTED_MODULE_17__searchfilter_pipe__["a" /* SearchFilterPipe */],
                __WEBPACK_IMPORTED_MODULE_18__plataform_plataform_component__["a" /* PlataformComponent */],
                __WEBPACK_IMPORTED_MODULE_19__game_game_component__["a" /* GameComponent */]
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_11__app_routing_module__["a" /* AppRoutingModule */],
                __WEBPACK_IMPORTED_MODULE_2__angular_common_http__["b" /* HttpClientModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_forms__["a" /* FormsModule */]
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_4__request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_5__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_6__chatbot_service__["a" /* ChatbotService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_7__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/chatbot.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ChatbotService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var ChatbotService = (function () {
    function ChatbotService(http) {
        this.http = http;
        this.proxy = 'https://cors-anywhere.herokuapp.com/';
    }
    ChatbotService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'text' });
        headers.append('Accept', 'text');
        headers.append('Content-Type', 'text');
        return headers;
    };
    ChatbotService.prototype.getChat = function (msg) {
        var url = this.proxy + "http://mydemos.in/chatbot/index.php?msg=" + msg;
        var headers = this.getHeaders();
        return this.http.get(url, { responseType: 'text' });
    };
    ChatbotService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], ChatbotService);
    return ChatbotService;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container pt-3\">\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li id=\"root\" class=\"breadcrumb-item active\" aria-current=\"page\">GameApp</li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/home']\">Home</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Live Chat</li>\n        </ol>\n    </nav>\n    <h1>Support - Live chat </h1>\n    <p class=\"text-80\">You can speak with me <strong> in real time</strong>. Only in English, please.</p>\n    <hr>\n\n    <ul class=\"list-group\">\n        <li class=\"list-group-item\" *ngFor=\"let m of chatMensajes\">\n            <p class=\"text-dark text-right\">\n                {{m[0]}}\n                <span class=\"badge badge-pill badge-primary\">Yo</span>\n            </p>\n            <hr>\n            <p class=\"text-dark text-left \">\n                <span class=\"badge badge-pill badge-success\">Antonio</span> {{m[1]}}\n            </p>\n        </li>\n    </ul>\n\n    <img [ngStyle]=\"{'display': visible}\" class=\"img-fluid\" src=\"assets/img/escribiendo.gif\" alt=\"Escribiendo...\">\n</div>\n\n<div class=\"container\">\n    <form class=\"top30\" (ngSubmit)=\"chat(msg)\" #msg=\"ngForm\">\n        <div class=\"form-group row mt-3\">\n            <div class=\"col-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Send your message\" name=\"msg\" ngModel>\n            </div>\n            <div class=\"col-2\">\n                <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn btn-block pl-0 pr-0\"><i class=\"fa fa-paper-plane\" aria-hidden=\"true\"></i></button>\n            </div>\n        </div>\n    </form>\n</div>"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__chatbot_service__ = __webpack_require__("../../../../../src/app/chatbot.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var ContactComponent = (function () {
    function ContactComponent(_bot, _shared) {
        this._bot = _bot;
        this._shared = _shared;
        this.chatMensajes = [];
        this.classButton = 'btn-primary';
        this.visible = 'none';
    }
    ContactComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueStyle = this._shared.theme;
        this.setThemeButtons();
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setThemeButtons();
        });
    };
    ContactComponent.prototype.clearInput = function (msg) {
        msg.resetForm();
    };
    ContactComponent.prototype.chat = function (msg) {
        var _this = this;
        this.visible = 'block';
        this._bot.getChat(msg.value.msg).subscribe(function (resp) {
            _this.chatMensajes.push([msg.value.msg, resp]);
            _this.visible = 'none';
            _this.clearInput(msg);
            window.scrollTo(0, document.body.scrollHeight);
        });
    };
    ContactComponent.prototype.setThemeButtons = function () {
        if (this.valueStyle == 'Playstation') {
            this.classButton = 'btn-primary';
        }
        else if (this.valueStyle == 'Xbox') {
            this.classButton = 'btn-success';
        }
        else if (this.valueStyle == 'Nintendo') {
            this.classButton = 'btn-danger';
        }
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__chatbot_service__["a" /* ChatbotService */], __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/footer/footer.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.html":
/***/ (function(module, exports) {

module.exports = "<footer class=\"text-80 page-footer mt-3 pt-3 footer\" [ngStyle]=\"{'background-color': fondo}\" tyle=\"color:#fff;\">\n    <div class=\"container-fluid\">\n        <div class=\"row\">\n            <div class=\"col-md-7 text-center m-auto\">\n                <p class=\"align-middle\">Antonio Jesús Álvarez Malagón </p>\n                <p class=\"align-middle\">2018 Copyright &copy;</p>\n            </div>\n        </div>\n    </div>\n</footer>"

/***/ }),

/***/ "../../../../../src/app/footer/footer.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return FooterComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var FooterComponent = (function () {
    function FooterComponent(_shared) {
        this._shared = _shared;
        this.fondoPlaystation = '#004877';
        this.fondoXbox = '#056d05';
        this.fondoNintendo = '#D20014';
        this.fondo = this.fondoPlaystation;
    }
    FooterComponent.prototype.setTheme = function () {
        if (this.valueStyle == 'Playstation') {
            this.fondo = this.fondoPlaystation;
        }
        else if (this.valueStyle == 'Xbox') {
            this.fondo = this.fondoXbox;
        }
        else if (this.valueStyle == 'Nintendo') {
            this.fondo = this.fondoNintendo;
        }
    };
    FooterComponent.prototype.ngOnInit = function () {
        var _this = this;
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setTheme();
        });
    };
    FooterComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-footer',
            template: __webpack_require__("../../../../../src/app/footer/footer.component.html"),
            styles: [__webpack_require__("../../../../../src/app/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "../../../../../src/app/game/game.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/game/game.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav *ngIf=\"bool\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li id=\"root\" class=\"breadcrumb-item active\" aria-current=\"page\">GameApp</li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/home']\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/games']\">Games</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">{{game.GameTitle}}</li>\n        </ol>\n    </nav>\n    <h1 *ngIf=\"bool\" class=\"my-4\">{{game.GameTitle}}\n        <!-- <small class=\"text-50\">me</small> -->\n    </h1>\n    <hr *ngIf=\"bool\">\n    <div class=\"row\">\n        <img [ngStyle]=\"{'display': visible}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/loading.gif\" alt=\"Cargando...\">\n    </div>\n    <div class=\"row\">\n        <img [ngStyle]=\"{'display': visible}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/cargando.gif\" alt=\"Cargando...\">\n    </div>\n    <div *ngIf=\"bool\" class=\"row mt-4\">\n        <div class=\"col-md-4\">\n            <img class=\"card-img-top img-fluid\" [src]='setImage(game.Images.boxart)' [alt]=\"game.GameTitle\">\n        </div>\n        <div class=\"col-md-8 mt-5\">\n            <ul>\n                <li *ngIf=\"game.GameTitle\"><strong [ngClass]=\"classText\">Title: </strong>{{game.GameTitle}}</li>\n                <li *ngIf=\"game.Platform\"><strong [ngClass]=\"classText\">Platform: </strong>{{game.Platform}}</li>\n                <li *ngIf=\"game.Publisher\"><strong [ngClass]=\"classText\">Publisher: </strong>{{game.Publisher}}</li>\n                <li *ngIf=\"game.Developer\"><strong [ngClass]=\"classText\">Developer: </strong>{{game.Developer}}</li>\n                <li *ngIf=\"game.Genres\"><strong [ngClass]=\"classText\">Genres: </strong>{{game.Genres.genre}}</li>\n                <li *ngIf=\"game.ReleaseDate\"><strong [ngClass]=\"classText\">Release date (mm/dd/yy): </strong>{{game.ReleaseDate}}</li>\n                <li *ngIf=\"game.ESRB\"><strong [ngClass]=\"classText\">ESRB: </strong>{{game.ESRB}}</li>\n            </ul>\n            <p>\n                {{game.Overview}}\n            </p>\n        </div>\n    </div>\n    <div *ngIf=\"bool\" class=\"row\">\n        <div class=\"col-12 mt-5 text-center\">\n            <button [routerLink]=\"['/games']\" type=\"button\" [ngClass]=\"classButtonOut\" class=\"btn btn-block\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/game/game.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GameComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_service__ = __webpack_require__("../../../../../src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var GameComponent = (function () {
    function GameComponent(activateRoute, _request, _shared) {
        this.activateRoute = activateRoute;
        this._request = _request;
        this._shared = _shared;
        this.baseUrl = 'http://thegamesdb.net/banners/';
        this.bool = false;
        this.visible = 'none';
        this.rating = [];
        this.rating_vacio = [];
        this.classBadget = 'badge-primary';
        this.classText = 'text-primary';
        this.classButtonOut = 'btn-outline-primary';
        this.desplegable = false;
    }
    GameComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visible = 'block';
        this.activateRoute.params
            .map(function (params) { return params['id']; })
            .subscribe(function (params) {
            // console.log(params);
            _this._request.getGameInfo(params).subscribe(function (data) {
                _this.game_resp = _this._request.parsetoJson(data);
                _this.game = _this.game_resp.Data.Game;
                console.log(_this.game);
                _this.bool = true;
                _this.visible = 'none';
            });
        });
        this.valueStyle = this._shared.theme;
        this.setThemeButtons();
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setThemeButtons();
        });
    };
    GameComponent.prototype.setImage = function (consola) {
        if (consola == undefined) {
            return 'assets/img/noimage.png';
        }
        else {
            return this.baseUrl + consola;
        }
    };
    GameComponent.prototype.setThemeButtons = function () {
        if (this.valueStyle == 'Playstation') {
            this.classButtonOut = 'btn-outline-primary';
            this.classBadget = 'badge-primary';
            this.classText = 'text-primary';
        }
        else if (this.valueStyle == 'Xbox') {
            this.classButtonOut = 'btn-outline-success';
            this.classBadget = 'badge-success';
            this.classText = 'text-success';
        }
        else if (this.valueStyle == 'Nintendo') {
            this.classButtonOut = 'btn-outline-danger';
            this.classBadget = 'badge-danger';
            this.classText = 'text-danger';
        }
    };
    GameComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-game',
            template: __webpack_require__("../../../../../src/app/game/game.component.html"),
            styles: [__webpack_require__("../../../../../src/app/game/game.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]])
    ], GameComponent);
    return GameComponent;
}());



/***/ }),

/***/ "../../../../../src/app/games/games.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/games/games.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li id=\"root\" class=\"breadcrumb-item active\" aria-current=\"page\">GameApp</li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/home']\">Home</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Games</li>\n        </ol>\n    </nav>\n    <h1 class=\"mt-3\"> <small class=\"text-50\">Search the</small> Games</h1>\n    <hr>\n\n    <form class=\"top30\" (ngSubmit)=\"getGame(termino)\" #termino=\"ngForm\">\n        <div class=\"form-group row mt-3\">\n            <div class=\"col-10\">\n                <input type=\"text\" class=\"form-control\" placeholder=\"Search game... (Call of duty, Mario, Tetris...)\" name=\"termino\" ngModel>\n            </div>\n            <div class=\"col-2\">\n                <button [ngClass]=\"classButton\" type=\"submit\" class=\"btn btn-block pl-0 pr-0\"><i class=\"fa fa-search\" aria-hidden=\"true\"></i></button>\n            </div>\n        </div>\n    </form>\n</div>\n<div class=\"container\">\n    <div class=\"row\" *ngIf=\"termino_buscado.length > 3\">\n        <h1 class=\"text-capitalize\">Busqueda: '{{termino_buscado}}'</h1>\n        <hr>\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row\" *ngIf=\"termino_buscado.length > 3\">\n        <img [ngStyle]=\"{'display': bool}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/loading.gif\" alt=\"Cargando...\">\n    </div>\n    <div class=\"row\" *ngIf=\"termino_buscado.length > 3\">\n        <img [ngStyle]=\"{'display': bool}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/cargando.gif\" alt=\"Cargando...\">\n    </div>\n</div>\n<div class=\"container\">\n    <div class=\"row p-auto\" *ngIf=\"termino_buscado.length > 3\">\n        <div *ngFor=\"let g of game\" class=\"carta col-12 col-sm-6 col-md-4 col-lg-3 animated fadeIn fast\">\n            <img class=\"card-img-top img-fluid\" [src]='setImage(g.Images.boxart.__text)' [alt]=\"g.GameTitle\">\n            <div class=\"card-body text-center\">\n                <h5 class=\"text-dark card-title\">{{g.GameTitle}}</h5>\n                <p class=\"text-dark card-title\">{{g.Platform}}</p>\n                <a [routerLink]=\"['/game', g.id]\" [ngClass]=\"classButton\" class=\"btn\">More</a>\n            </div>\n        </div>\n    </div>\n</div>\n<div class=\"container\" *ngIf=\"3 >= termino_buscado.length && 0 < termino_buscado.length\">\n    <div class=\"row p-auto\">\n        <h1>No hay resultados con '{{termino_buscado}}'</h1>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/games/games.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return GamesComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("../../../../../src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var GamesComponent = (function () {
    function GamesComponent(_servicio, _shared) {
        this._servicio = _servicio;
        this._shared = _shared;
        this.i = 0;
        this.bool = 'none';
        this.classButton = 'btn-primary';
        this.baseUrl = 'http://thegamesdb.net/banners/';
        this.termino_buscado = '';
    }
    GamesComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.termino_buscado = '';
        this.bool = 'none';
        this.valueStyle = this._shared.theme;
        this.setThemeButtons();
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setThemeButtons();
        });
    };
    GamesComponent.prototype.getGame = function (termino) {
        var _this = this;
        this.termino_buscado = termino.value.termino;
        this.bool = 'block';
        this._servicio.getGame(termino.value.termino).subscribe(function (resp) {
            _this.game = _this._servicio.parsetoJson(resp);
            _this.game = _this.game.Data.Game;
            console.log(_this.game);
            _this.filter();
            _this.bool = 'none';
        });
    };
    GamesComponent.prototype.filter = function () {
        for (var i = 0; i < this.game.length; i++) {
            if (this.game[i].Images == false || this.game[i].Images.boxart == false || this.game[i].Images.boxart.__text == false) {
                this.game.splice(i, 1);
            }
        }
    };
    GamesComponent.prototype.setImage = function (img) {
        if (img == undefined) {
            return 'assets/img/noimage.png';
        }
        else {
            return this.baseUrl + img;
        }
    };
    GamesComponent.prototype.setThemeButtons = function () {
        if (this.valueStyle == 'Playstation') {
            this.classButton = 'btn-primary';
        }
        else if (this.valueStyle == 'Xbox') {
            this.classButton = 'btn-success';
        }
        else if (this.valueStyle == 'Nintendo') {
            this.classButton = 'btn-danger';
        }
    };
    GamesComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-games',
            template: __webpack_require__("../../../../../src/app/games/games.component.html"),
            styles: [__webpack_require__("../../../../../src/app/games/games.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]])
    ], GamesComponent);
    return GamesComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<div id=\"carouselExampleIndicators\" class=\"carousel slide\" data-ride=\"carousel\" data-interval=\"1500\">\n    <ol class=\"carousel-indicators\">\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"0\" class=\"active\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"1\"></li>\n        <li data-target=\"#carouselExampleIndicators\" data-slide-to=\"2\"></li>\n    </ol>\n    <div class=\"carousel-inner\" data-ride=\"ride\">\n        <div class=\"carousel-item active\">\n            <img class=\"d-block w-100\" src=\"assets/img/playstation.jpg\" alt=\"First slide\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/xbox.jpg\" alt=\"Second slide\">\n        </div>\n        <div class=\"carousel-item\">\n            <img class=\"d-block w-100\" src=\"assets/img/nintendo.jpg\" alt=\"Third slide\">\n        </div>\n    </div>\n    <a class=\"carousel-control-prev\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"prev\">\n        <span class=\"carousel-control-prev-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Previous</span>\n    </a>\n    <a class=\"carousel-control-next\" href=\"#carouselExampleIndicators\" role=\"button\" data-slide=\"next\">\n        <span class=\"carousel-control-next-icon\" aria-hidden=\"true\"></span>\n        <span class=\"sr-only\">Next</span>\n    </a>\n</div>\n<nav aria-label=\"breadcrumb\">\n    <ol class=\"breadcrumb\">\n        <li id=\"root\" class=\"breadcrumb-item active\" aria-current=\"page\">GameApp</li>\n        <li class=\"breadcrumb-item active\" aria-current=\"page\">Home</li>\n    </ol>\n</nav>\n<br>\n\n<div class=\"container top30\">\n    <div class=\"row\">\n        <div class=\"col-md-4\">\n            <img class=\"img-fluid\" src=\"assets/img/plataform.png\" alt=\"Plataforms\">\n            <hr>\n            <p>\n                We have at your disposal all the information of the videogames's plataforms so far. You can see them here ...\n            </p>\n            <a [routerLink]=\"['/plataforms']\"><button type=\"button\" class=\"btn\" [ngClass]=\"classButton\">Plataforms</button></a>\n        </div>\n        <div class=\"col-md-4\">\n            <img class=\"img-fluid\" src=\"assets/img/games.png\" alt=\"Games\">\n            <hr>\n            <p>\n                You can search all available games with his information since the birth of the games in our database. You can search here ...\n            </p>\n            <a [routerLink]=\"['/games']\"><button type=\"button\" class=\"btn\" [ngClass]=\"classButton\">Search games</button></a>\n        </div>\n        <div class=\"col-md-4\">\n            <img class=\"img-fluid\" src=\"assets/img/about.png\" alt=\"Chat\">\n            <hr>\n            <p>\n                You can talk in real-time chat on our page with a web support. Tell us everything you want. (It's really a bot...)\n            </p>\n            <a [routerLink]=\"['/contact']\"><button type=\"button\" class=\"btn\" [ngClass]=\"classButton\">Chat</button></a>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var HomeComponent = (function () {
    function HomeComponent(_shared) {
        this._shared = _shared;
        this.classButton = 'btn-primary';
    }
    HomeComponent.prototype.setThemeButtons = function () {
        if (this.valueStyle == 'Playstation') {
            this.classButton = 'btn-primary';
        }
        else if (this.valueStyle == 'Xbox') {
            this.classButton = 'btn-success';
        }
        else if (this.valueStyle == 'Nintendo') {
            this.classButton = 'btn-danger';
        }
    };
    HomeComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueStyle = this._shared.theme;
        this.setThemeButtons();
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setThemeButtons();
        });
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.html":
/***/ (function(module, exports) {

module.exports = "<nav class=\"navbar navbar-expand-lg navbar-dark\" [ngStyle]=\"{'background-color': fondoNav, 'color': colorLetra}\">\n    <a class=\"navbar-brand\"><img [src]=\"logo\" width=\"50\" class=\"d-inline-block align-top mr-3\" alt=\"GamesApp\"></a>\n    <h5 class=\"mr-5\" [ngStyle]=\"{'color': colorLetra}\">GamesApp</h5>\n    <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarNav\" aria-controls=\"navbarNav\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n    <div class=\"collapse navbar-collapse\" id=\"navbarNav\">\n        <ul class=\"navbar-nav mr-auto\">\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['home']\">Home</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['games']\">Games</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['plataforms']\">Plataforms</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['contact']\">Live Chat</a>\n            </li>\n            <li class=\"nav-item\" routerLinkActive=\"active\">\n                <a class=\"nav-link\" [routerLink]=\"['about']\">About</a>\n            </li>\n\n        </ul>\n\n        <div class=\"my-2\">\n            <div class=\"btn-group btn-group-sm\" role=\"group\">\n                <span class=\" d-none d-sm-block pr-4 pt-1\" [ngStyle]=\"{'color': colorLetra}\"> Theme: </span>\n                <button class=\"btn btn-primary theme\" (click)=\"setTheme('Playstation')\" name=\"valueStyle\" value=\"Playstation\" type=\"button\"> Playstation</button>\n                <button class=\"btn btn-success theme\" (click)=\"setTheme('Xbox')\" name=\"valueStyle\" value=\"Playstation\" type=\"button\"> Xbox</button>\n                <button class=\"btn btn-danger theme\" (click)=\"setTheme('Nintendo')\" name=\"valueStyle\" value=\"Playstation\" type=\"button\"> Nintendo</button>\n            </div>\n        </div>\n    </div>\n\n\n</nav>"

/***/ }),

/***/ "../../../../../src/app/navbar/navbar.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return NavbarComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = (function () {
    function NavbarComponent(_shared) {
        this._shared = _shared;
        this.themePlaystation = {
            logo: 'assets/img/logo-playstation.png',
            backgroundNav: '#004877',
            backgroundPag: '#000',
            colorLetra: '#fff',
        };
        this.themeXbox = {
            logo: 'assets/img/logo-xbox.png',
            backgroundNav: '#056d05',
            backgroundPag: '#C1C0C2',
            colorLetra: '#fff'
        };
        this.themeNintendo = {
            logo: 'assets/img/logo-nintendo.png',
            backgroundNav: '#D20014',
            backgroundPag: '#fff',
            colorLetra: '#fff'
        };
        this.valueStyle = 'Playstation';
        this.logo = this.themePlaystation.logo;
        this.fondoNav = this.themePlaystation.backgroundNav;
        this.fondoPag = this.themePlaystation.backgroundPag;
        this.colorLetra = this.themePlaystation.colorLetra;
    }
    NavbarComponent.prototype.ngOnInit = function () {
    };
    NavbarComponent.prototype.setThemePlaystation = function () {
        this.logo = this.themePlaystation.logo;
        this.fondoNav = this.themePlaystation.backgroundNav;
        this.fondoPag = this.themePlaystation.backgroundPag;
        this.colorLetra = this.themePlaystation.colorLetra;
    };
    NavbarComponent.prototype.setThemeXbox = function () {
        this.logo = this.themeXbox.logo;
        this.fondoNav = this.themeXbox.backgroundNav;
        this.fondoPag = this.themeXbox.backgroundPag;
        this.colorLetra = this.themeXbox.colorLetra;
    };
    NavbarComponent.prototype.setThemeNintendo = function () {
        this.logo = this.themeNintendo.logo;
        this.fondoNav = this.themeNintendo.backgroundNav;
        this.fondoPag = this.themeNintendo.backgroundPag;
        this.colorLetra = this.themeNintendo.colorLetra;
    };
    NavbarComponent.prototype.setTheme = function (theme) {
        this.valueStyle = theme;
        if (this.valueStyle == 'Playstation') {
            this.setThemePlaystation();
        }
        else if (this.valueStyle == 'Xbox') {
            this.setThemeXbox();
        }
        else if (this.valueStyle == 'Nintendo') {
            this.setThemeNintendo();
        }
        this._shared.setVal(this.valueStyle);
    };
    NavbarComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-navbar',
            template: __webpack_require__("../../../../../src/app/navbar/navbar.component.html"),
            styles: [__webpack_require__("../../../../../src/app/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__shared_service__["a" /* SharedService */]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "../../../../../src/app/plataform/plataform.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plataform/plataform.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav *ngIf=\"bool\" aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li id=\"root\" class=\"breadcrumb-item active\" aria-current=\"page\">GameApp</li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/home']\">Home</a></li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/plataforms']\">Plataforms</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">{{plataforma.Platform}}</li>\n        </ol>\n    </nav>\n    <h1 *ngIf=\"bool\" class=\"my-4\">{{plataforma.Platform}}\n        <!-- <small class=\"text-50\">me</small> -->\n    </h1>\n    <hr *ngIf=\"bool\">\n    <div class=\"row\">\n        <img [ngStyle]=\"{'display': visible}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/loading.gif\" alt=\"Cargando...\">\n    </div>\n    <div class=\"row\">\n        <img [ngStyle]=\"{'display': visible}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/cargando.gif\" alt=\"Cargando...\">\n    </div>\n    <div *ngIf=\"bool\" class=\"row mt-4\">\n        <div class=\"col-md-4 bg-light rounded\">\n            <img class=\"card-img-top img-fluid\" [src]='setImage(plataforma.Images.consoleart)' [alt]=\"plataforma.Platform\">\n        </div>\n        <div class=\"col-md-8 mt-5\">\n            <ul>\n                <li *ngIf=\"plataforma.Platform\"><strong [ngClass]=\"classText\">Name: </strong>{{plataforma.Platform}}</li>\n                <li *ngIf=\"plataforma.developer\"><strong [ngClass]=\"classText\">Developer: </strong>{{plataforma.developer}}</li>\n                <li *ngIf=\"plataforma.manufacturer\"><strong [ngClass]=\"classText\">Manufacturer: </strong>{{plataforma.manufacturer}}</li>\n                <li *ngIf=\"plataforma.cpu\"><strong [ngClass]=\"classText\">CPU: </strong>{{plataforma.cpu}}</li>\n                <li *ngIf=\"plataforma.graphics\"><strong [ngClass]=\"classText\">Graphics: </strong>{{plataforma.graphics}}</li>\n                <li *ngIf=\"plataforma.memory\"><strong [ngClass]=\"classText\">Memory: </strong>{{plataforma.memory}}</li>\n                <li *ngIf=\"plataforma.media\"><strong [ngClass]=\"classText\">Media: </strong>{{plataforma.media}}</li>\n                <li *ngIf=\"plataforma.display\"><strong [ngClass]=\"classText\">Display: </strong>{{plataforma.display}}</li>\n                <li *ngIf=\"plataforma.sound\"><strong [ngClass]=\"classText\">Sound: </strong>{{plataforma.sound}}</li>\n                <li *ngIf=\"plataforma.maxcontrollers\"><strong [ngClass]=\"classText\">Max. Controllers: </strong>{{plataforma.maxcontrollers}}</li>\n            </ul>\n        </div>\n    </div>\n    <div *ngIf=\"bool\" class=\"row\">\n        <div class=\"col-12\">\n            <div class=\"mt-5 text-center\">\n                <span *ngFor=\"let i of rating\"> <i *ngIf=\"i\" class=\"fa fa-star\" aria-hidden=\"true\"></i>\n            </span>\n                <span *ngFor=\"let i of rating_vacio\"> <i *ngIf=\"i\" class=\"fa fa-star star-white\" aria-hidden=\"true\"></i>\n            </span>\n                <span [ngClass]=\"classBadget\" class=\"btn\" class=\"badge rating\">{{plataforma.Rating}}</span>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"bool\" class=\"row\">\n        <div class=\"col-12 mt-5 mx-auto\">\n            <button (click)=\"desplegable = !desplegable\" type=\"button\" [ngClass]=\"classButtonOut\" class=\"btn btn-block\">Click to description <i class=\"fa fa-sort-desc\" aria-hidden=\"true\"></i></button>\n            <div class=\"fadeIn fast mt-4\" *ngIf=\"desplegable\">\n                <p>\n                    {{plataforma.overview}}\n                </p>\n            </div>\n        </div>\n    </div>\n    <div *ngIf=\"bool\" class=\"row\">\n        <div class=\"col-12 mt-5 text-center\">\n            <button [routerLink]=\"['/plataforms']\" type=\"button\" [ngClass]=\"classButtonOut\" class=\"btn\"><i class=\"fa fa-arrow-left\" aria-hidden=\"true\"></i> Back</button>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/plataform/plataform.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlataformComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__request_service__ = __webpack_require__("../../../../../src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_rxjs_add_operator_map__ = __webpack_require__("../../../../rxjs/_esm5/add/operator/map.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var PlataformComponent = (function () {
    function PlataformComponent(activateRoute, _request, _shared) {
        this.activateRoute = activateRoute;
        this._request = _request;
        this._shared = _shared;
        this.baseUrl = 'http://thegamesdb.net/banners/';
        this.bool = false;
        this.visible = 'none';
        this.rating = [];
        this.rating_vacio = [];
        this.classBadget = 'badge-primary';
        this.classText = 'text-primary';
        this.classButtonOut = 'btn-outline-primary';
        this.desplegable = false;
    }
    PlataformComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.visible = 'block';
        this.activateRoute.params
            .map(function (params) { return params['id']; })
            .subscribe(function (params) {
            // console.log(params);
            _this._request.getPlataforma(params).subscribe(function (data) {
                _this.plataforma_resp = _this._request.parsetoJson(data);
                _this.plataforma = _this.plataforma_resp.Data.Platform;
                console.log(_this.plataforma);
                _this.bool = true;
                _this.visible = 'none';
                _this.setRating(Math.round(_this.plataforma.Rating));
            });
        });
        this.valueStyle = this._shared.theme;
        this.setThemeButtons();
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setThemeButtons();
        });
    };
    PlataformComponent.prototype.setRating = function (n) {
        if (n === void 0) { n = 0; }
        this.nota = n;
        for (var i = 0; i < 10; i++) {
            this.rating.push(false);
        }
        this.rating.splice(0, n);
        for (var k = 0; k < this.rating.length; k++) {
            this.rating_vacio.push(true);
        }
        for (var j = 0; j < n; j++) {
            this.rating.push(true);
        }
        this.rating = this.rating.reverse();
    };
    PlataformComponent.prototype.setImage = function (consola) {
        if (consola == undefined) {
            return 'assets/img/noimage.png';
        }
        else {
            return this.baseUrl + consola;
        }
    };
    PlataformComponent.prototype.setThemeButtons = function () {
        if (this.valueStyle == 'Playstation') {
            this.classButtonOut = 'btn-outline-primary';
            this.classBadget = 'badge-primary';
            this.classText = 'text-primary';
        }
        else if (this.valueStyle == 'Xbox') {
            this.classButtonOut = 'btn-outline-success';
            this.classBadget = 'badge-success';
            this.classText = 'text-success';
        }
        else if (this.valueStyle == 'Nintendo') {
            this.classButtonOut = 'btn-outline-danger';
            this.classBadget = 'badge-danger';
            this.classText = 'text-danger';
        }
    };
    PlataformComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plataform',
            template: __webpack_require__("../../../../../src/app/plataform/plataform.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plataform/plataform.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_router__["a" /* ActivatedRoute */], __WEBPACK_IMPORTED_MODULE_3__request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_2__shared_service__["a" /* SharedService */]])
    ], PlataformComponent);
    return PlataformComponent;
}());



/***/ }),

/***/ "../../../../../src/app/plataforms/plataforms.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/plataforms/plataforms.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"container\">\n    <nav aria-label=\"breadcrumb\">\n        <ol class=\"breadcrumb\">\n            <li id=\"root\" class=\"breadcrumb-item active\" aria-current=\"page\">GameApp</li>\n            <li class=\"breadcrumb-item\"><a [routerLink]=\"['/home']\">Home</a></li>\n            <li class=\"breadcrumb-item active\" aria-current=\"page\">Plataforms</li>\n        </ol>\n    </nav>\n    <h1 class=\"mt-3\"> <small class=\"text-50\">Search all of the</small> Plataforms</h1>\n    <hr>\n    <!-- <input class=\"col-12\" type=\"range\" min=\"1960\" max=\"2020\" step=\"5\" [(ngModel)]=\"x\">\n    <div class=\"row\">\n        <div class=\"col-4 text-left\">{{min}}</div>\n        <div class=\"col-4 text-center\">{{x}}</div>\n        <div class=\"col-4 text-right\">{{max}}</div>\n    </div> -->\n    <p class=\"text-small\"> *Servidor lento espera mientras se cargan todas las consolas</p>\n    <input name=\"search\" class=\"form-control col-12 mb-3\" [(ngModel)]=\"filter\" id=\"search\" type=\"search\" required placeholder=\"Filter results... (Sony, Xbox, Nintendo...)\">\n    <div class=\"row\">\n        <img [ngStyle]=\"{'display': bool}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/loading.gif\" alt=\"Cargando...\">\n    </div>\n    <div class=\"row\">\n        <img [ngStyle]=\"{'display': bool}\" class=\"img-fluid loading mx-auto mt-4\" src=\"assets/img/cargando.gif\" alt=\"Cargando...\">\n    </div>\n</div>\n\n<div class=\"container\">\n    <div class=\"row p-auto\">\n        <div *ngFor=\"let consola of plataformas | searchfilter: filter\" class=\"carta col-12 col-sm-6 col-md-4 col-lg-3 animated fadeIn fast\" [ngClass]=\"'order-'+'consola.Data.Platform.id'\">\n            <img class=\"card-img-top img-fluid\" [src]='setImage(consola.Data.Platform.Images.consoleart)' alt=\"Miniatura\">\n            <div class=\"card-body text-center\">\n                <h5 class=\"text-dark card-title\">{{consola.Data.Platform.Platform}}</h5>\n                <a [routerLink]=\"['/plataform', consola.Data.Platform.id]\" [ngClass]=\"classButton\" class=\"btn\">More</a>\n            </div>\n        </div>\n    </div>\n</div>"

/***/ }),

/***/ "../../../../../src/app/plataforms/plataforms.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return PlataformsComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__request_service__ = __webpack_require__("../../../../../src/app/request.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__searchfilter_pipe__ = __webpack_require__("../../../../../src/app/searchfilter.pipe.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__shared_service__ = __webpack_require__("../../../../../src/app/shared.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var PlataformsComponent = (function () {
    function PlataformsComponent(_servicio, _shared, search) {
        this._servicio = _servicio;
        this._shared = _shared;
        this.search = search;
        this.min = 1960;
        this.x = 1990;
        this.max = 2020;
        this.resp_plataformas = [];
        this.plataformas = [];
        this.bool = 'none';
        this.baseUrl = 'http://thegamesdb.net/banners/';
        this.classButton = 'btn-primary';
    }
    PlataformsComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.valueStyle = this._shared.theme;
        this.setThemeButtons();
        this._shared.value$.subscribe(function (data) {
            _this.valueStyle = data;
            _this.setThemeButtons();
        });
        this.filter = '';
        this.bool = 'block';
        this.getPlataforms();
    };
    PlataformsComponent.prototype.getPlataforms = function () {
        var _this = this;
        this._servicio.getPlataformas().subscribe(function (resp) {
            _this.resp_plataformas = _this._servicio.parsetoJson(resp);
            _this.resp_plataformas = _this.resp_plataformas.Data.Platforms.Platform;
            console.log(_this.resp_plataformas);
            for (var i = 0; i < _this.resp_plataformas.length; i++) {
                _this.getPlataform(_this.resp_plataformas[i].id);
            }
            _this.bool = 'none';
        });
    };
    PlataformsComponent.prototype.getPlataform = function (id) {
        var _this = this;
        this._servicio.getPlataforma(id).subscribe(function (resp) {
            _this.plataforma = _this._servicio.parsetoJson(resp);
            _this.plataformas.push(_this.plataforma);
            _this._shared.savePlataforms(_this.plataformas);
            _this.plataformas = _this.search.transform(_this.plataformas, '');
        });
    };
    PlataformsComponent.prototype.setImage = function (consola) {
        if (consola == undefined) {
            return 'assets/img/noimage.png';
        }
        else {
            return this.baseUrl + consola;
        }
    };
    PlataformsComponent.prototype.setThemeButtons = function () {
        if (this.valueStyle == 'Playstation') {
            this.classButton = 'btn-primary';
        }
        else if (this.valueStyle == 'Xbox') {
            this.classButton = 'btn-success';
        }
        else if (this.valueStyle == 'Nintendo') {
            this.classButton = 'btn-danger';
        }
    };
    PlataformsComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-plataforms',
            template: __webpack_require__("../../../../../src/app/plataforms/plataforms.component.html"),
            styles: [__webpack_require__("../../../../../src/app/plataforms/plataforms.component.css")],
            providers: [__WEBPACK_IMPORTED_MODULE_2__searchfilter_pipe__["a" /* SearchFilterPipe */]]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__request_service__["a" /* RequestService */], __WEBPACK_IMPORTED_MODULE_3__shared_service__["a" /* SharedService */], __WEBPACK_IMPORTED_MODULE_2__searchfilter_pipe__["a" /* SearchFilterPipe */]])
    ], PlataformsComponent);
    return PlataformsComponent;
}());



/***/ }),

/***/ "../../../../../src/app/request.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return RequestService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_common_http__ = __webpack_require__("../../../common/esm5/http.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2_node_x2js_src_index__ = __webpack_require__("../../../../node-x2js/src/index.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


// import * as $ from 'jquery';
// import 'rxjs/add/operator/map';

var RequestService = (function () {
    function RequestService(http) {
        this.http = http;
        this.proxy = 'https://cors-anywhere.herokuapp.com/';
        this.plataformas = [];
        this.xml2json = new __WEBPACK_IMPORTED_MODULE_2_node_x2js_src_index__["a" /* default */]();
    }
    RequestService.prototype.parsetoJson = function (xmlDoc) {
        var x2js = new __WEBPACK_IMPORTED_MODULE_2_node_x2js_src_index__["a" /* default */]();
        var jsonObj = x2js.xml_str2json(xmlDoc);
        return jsonObj;
    };
    RequestService.prototype.getHeaders = function () {
        var headers = new __WEBPACK_IMPORTED_MODULE_1__angular_common_http__["c" /* HttpHeaders */]({ 'Content-Type': 'text/xml' });
        headers.append('Accept', 'text/xml');
        headers.append('Content-Type', 'text/xml');
        return headers;
    };
    RequestService.prototype.getPlataformas = function () {
        var url = this.proxy + "http://thegamesdb.net/api/GetPlatformsList.php";
        var headers = this.getHeaders();
        return this.http.get(url, { responseType: 'text' });
    };
    RequestService.prototype.getPlataforma = function (id) {
        var url = this.proxy + "http://thegamesdb.net/api/GetPlatform.php?id=" + id;
        var headers = this.getHeaders();
        return this.http.get(url, { responseType: 'text' });
    };
    RequestService.prototype.getGame = function (name) {
        if (name.length > 3) {
            var url = this.proxy + "http://thegamesdb.net/api/GetGame.php?name=" + name;
            var headers = this.getHeaders();
            return this.http.get(url, { responseType: 'text' });
        }
    };
    RequestService.prototype.getGameInfo = function (id) {
        var url = this.proxy + "http://thegamesdb.net/api/GetGame.php?id=" + id;
        var headers = this.getHeaders();
        return this.http.get(url, { responseType: 'text' });
    };
    RequestService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__angular_common_http__["a" /* HttpClient */]])
    ], RequestService);
    return RequestService;
}());

// http://thegamesdb.net/api/GetGame.php?id=50800


/***/ }),

/***/ "../../../../../src/app/searchfilter.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SearchFilterPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SearchFilterPipe = (function () {
    function SearchFilterPipe() {
    }
    SearchFilterPipe.prototype.transform = function (value, term) {
        return value.filter(function (item) {
            if (term) {
                var regexp = new RegExp("\\b" + term, "gi");
                return regexp.test(item.Data.Platform.Platform);
            }
            else {
                return true;
            }
        });
    };
    SearchFilterPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: "searchfilter"
        }),
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])()
    ], SearchFilterPipe);
    return SearchFilterPipe;
}());



/***/ }),

/***/ "../../../../../src/app/shared.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SharedService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__ = __webpack_require__("../../../../rxjs/_esm5/Subject.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SharedService = (function () {
    function SharedService() {
        this.valueStyle = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.value$ = this.valueStyle.asObservable();
        this.datosPlataformas = new __WEBPACK_IMPORTED_MODULE_1_rxjs_Subject__["a" /* Subject */]();
        this.plataformas$ = this.datosPlataformas.asObservable();
    }
    SharedService.prototype.setVal = function (data) {
        this.valueStyle.next(data);
        this.theme = data;
    };
    SharedService.prototype.savePlataforms = function (arrayPlataformas) {
        this.plataformas = [];
        this.plataformas = arrayPlataformas;
    };
    SharedService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], SharedService);
    return SharedService;
}());



/***/ }),

/***/ "../../../../../src/app/sinfoto.pipe.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return SinfotoPipe; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};

var SinfotoPipe = (function () {
    function SinfotoPipe() {
    }
    SinfotoPipe.prototype.transform = function (value) {
        var noimage = 'assets/img/noimage.png';
        if (!value == undefined) {
            return noimage;
        }
        // return (value.length > 0)? value[1].url : noimage;
    };
    SinfotoPipe = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["T" /* Pipe */])({
            name: 'sinfoto'
        })
    ], SinfotoPipe);
    return SinfotoPipe;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map