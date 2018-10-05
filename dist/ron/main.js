(window["webpackJsonp"] = window["webpackJsonp"] || []).push([["main"],{

/***/ "./src/$$_lazy_route_resource lazy recursive":
/*!**********************************************************!*\
  !*** ./src/$$_lazy_route_resource lazy namespace object ***!
  \**********************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

var map = {
	"src/app/d1/d1.module": [
		"./src/app/d1/d1.module.ts",
		"src-app-d1-d1-module"
	],
	"src/app/d2/d2.module": [
		"./src/app/d2/d2.module.ts",
		"default~src-app-d2-d2-module~src-app-setting-setting-module",
		"src-app-d2-d2-module"
	],
	"src/app/home/home.module": [
		"./src/app/home/home.module.ts",
		"src-app-home-home-module"
	],
	"src/app/setting/setting.module": [
		"./src/app/setting/setting.module.ts",
		"default~src-app-d2-d2-module~src-app-setting-setting-module",
		"src-app-setting-setting-module"
	]
};
function webpackAsyncContext(req) {
	var ids = map[req];
	if(!ids) {
		return Promise.resolve().then(function() {
			var e = new Error("Cannot find module '" + req + "'");
			e.code = 'MODULE_NOT_FOUND';
			throw e;
		});
	}
	return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function() {
		var id = ids[0];
		return __webpack_require__(id);
	});
}
webpackAsyncContext.keys = function webpackAsyncContextKeys() {
	return Object.keys(map);
};
webpackAsyncContext.id = "./src/$$_lazy_route_resource lazy recursive";
module.exports = webpackAsyncContext;

/***/ }),

/***/ "./src/app/Auth/authenticate.module.ts":
/*!*********************************************!*\
  !*** ./src/app/Auth/authenticate.module.ts ***!
  \*********************************************/
/*! exports provided: AuthModule */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthModule", function() { return AuthModule; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};



function authHttpServiceFactory(_http, options) {
    return new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthHttp"](new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthConfig"]({
        tokenName: 'token',
        headerPrefix: 'Bearer:',
        tokenGetter: (function () { return localStorage.getItem('apiToken'); }),
        globalHeaders: [{ 'Content-Type': 'application/json' }],
    }), _http, options);
}
var AuthModule = /** @class */ (function () {
    function AuthModule() {
    }
    AuthModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["NgModule"])({
            providers: [
                {
                    provide: angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthHttp"],
                    useFactory: authHttpServiceFactory,
                    deps: [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"], _angular_http__WEBPACK_IMPORTED_MODULE_1__["RequestOptions"]]
                }
            ]
        })
    ], AuthModule);
    return AuthModule;
}());



/***/ }),

/***/ "./src/app/app-routing.ts":
/*!********************************!*\
  !*** ./src/app/app-routing.ts ***!
  \********************************/
/*! exports provided: routes */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "routes", function() { return routes; });
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _services_Authservice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./services/Authservice */ "./src/app/services/Authservice.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");




var routes = [
    {
        path: 'login',
        component: _login_login_component__WEBPACK_IMPORTED_MODULE_0__["LoginComponent"],
    },
    { path: '',
        redirectTo: '/login',
        pathMatch: 'full'
    },
    {
        path: 'logout',
        component: _logout_logout_component__WEBPACK_IMPORTED_MODULE_3__["LogoutComponent"]
    },
    {
        path: 'app',
        component: _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_1__["DashboardComponent"],
        canActivate: [_services_Authservice__WEBPACK_IMPORTED_MODULE_2__["AuthService"]],
        children: [
            {
                path: 'd1',
                loadChildren: 'src/app/d1/d1.module#D1Module'
            },
            {
                path: 'd2',
                loadChildren: 'src/app/d2/d2.module#D2Module'
            },
            {
                path: 'home',
                loadChildren: 'src/app/home/home.module#HomeModule'
            },
            {
                path: 'setting',
                loadChildren: 'src/app/setting/setting.module#SettingModule'
            }
        ]
    }
    //canActivate:[AuthService],
];


/***/ }),

/***/ "./src/app/app.component.css":
/*!***********************************!*\
  !*** ./src/app/app.component.css ***!
  \***********************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/app.component.html":
/*!************************************!*\
  !*** ./src/app/app.component.html ***!
  \************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<router-outlet></router-outlet>\n          \n"

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
        this.title = 'ron';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/app.component.css")]
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
/* harmony import */ var _login_login_component__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./login/login.component */ "./src/app/login/login.component.ts");
/* harmony import */ var _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./dashboard/dashboard.component */ "./src/app/dashboard/dashboard.component.ts");
/* harmony import */ var _app_routing__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./app-routing */ "./src/app/app-routing.ts");
/* harmony import */ var _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./components/navbar/navbar.component */ "./src/app/components/navbar/navbar.component.ts");
/* harmony import */ var ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ngx-bootstrap/accordion */ "./node_modules/ngx-bootstrap/accordion/index.js");
/* harmony import */ var ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ngx-bootstrap/collapse */ "./node_modules/ngx-bootstrap/collapse/index.js");
/* harmony import */ var ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ngx-bootstrap/dropdown */ "./node_modules/ngx-bootstrap/dropdown/index.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
/* harmony import */ var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(/*! @angular/platform-browser/animations */ "./node_modules/@angular/platform-browser/fesm5/animations.js");
/* harmony import */ var _login_login_service__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(/*! ./login/login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _services_Authservice__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(/*! ./services/Authservice */ "./src/app/services/Authservice.ts");
/* harmony import */ var _Auth_authenticate_module__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(/*! ./Auth/authenticate.module */ "./src/app/Auth/authenticate.module.ts");
/* harmony import */ var _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(/*! ./logout/logout.component */ "./src/app/logout/logout.component.ts");
/* harmony import */ var _d2_d2_service__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(/*! ./d2/d2.service */ "./src/app/d2/d2.service.ts");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(/*! ng-sidebar */ "./node_modules/ng-sidebar/lib/index.js");
/* harmony import */ var ng_sidebar__WEBPACK_IMPORTED_MODULE_19___default = /*#__PURE__*/__webpack_require__.n(ng_sidebar__WEBPACK_IMPORTED_MODULE_19__);
/* harmony import */ var _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(/*! ./components/footer/footer.component */ "./src/app/components/footer/footer.component.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};













//services

//auth service




//extra



var AppModule = /** @class */ (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_1__["NgModule"])({
            declarations: [
                _app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"],
                _login_login_component__WEBPACK_IMPORTED_MODULE_3__["LoginComponent"],
                _dashboard_dashboard_component__WEBPACK_IMPORTED_MODULE_4__["DashboardComponent"],
                _components_navbar_navbar_component__WEBPACK_IMPORTED_MODULE_6__["NavbarComponent"],
                _logout_logout_component__WEBPACK_IMPORTED_MODULE_16__["LogoutComponent"],
                _components_footer_footer_component__WEBPACK_IMPORTED_MODULE_20__["FooterComponent"],
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], ngx_bootstrap_accordion__WEBPACK_IMPORTED_MODULE_7__["AccordionModule"].forRoot(), ngx_bootstrap_collapse__WEBPACK_IMPORTED_MODULE_8__["CollapseModule"].forRoot(),
                ngx_bootstrap_dropdown__WEBPACK_IMPORTED_MODULE_9__["BsDropdownModule"].forRoot(),
                _angular_router__WEBPACK_IMPORTED_MODULE_10__["RouterModule"].forRoot(_app_routing__WEBPACK_IMPORTED_MODULE_5__["routes"]), _angular_http__WEBPACK_IMPORTED_MODULE_11__["HttpModule"],
                _Auth_authenticate_module__WEBPACK_IMPORTED_MODULE_15__["AuthModule"], ng_sidebar__WEBPACK_IMPORTED_MODULE_19__["SidebarModule"].forRoot(),
                _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_12__["BrowserAnimationsModule"], ngx_toastr__WEBPACK_IMPORTED_MODULE_18__["ToastrModule"].forRoot()
            ],
            providers: [_login_login_service__WEBPACK_IMPORTED_MODULE_13__["LoginService"], _services_Authservice__WEBPACK_IMPORTED_MODULE_14__["AuthService"], _d2_d2_service__WEBPACK_IMPORTED_MODULE_17__["D2Service"]],
            bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_2__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/footer/footer.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/footer/footer.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/footer/footer.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/footer/footer.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<footer>\n  <div class=\"text-center\">\n    <span class=\"col-md-3 pull-left\"><a href=\"\" >About</a>&nbsp;|<a href=\"\">Privacy</a></span>\n    <a class=\"col-md-3\">Instance Assistance:1800-180-1503</a>\n    <span class=\"col-md-3 pull-right\"><a>For Aurbindos pharma Internal use only</a></span>\n  </div>\n</footer>"

/***/ }),

/***/ "./src/app/components/footer/footer.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/footer/footer.component.ts ***!
  \*******************************************************/
/*! exports provided: FooterComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "FooterComponent", function() { return FooterComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var FooterComponent = /** @class */ (function () {
    function FooterComponent() {
    }
    FooterComponent.prototype.ngOnInit = function () {
    };
    FooterComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-footer',
            template: __webpack_require__(/*! ./footer.component.html */ "./src/app/components/footer/footer.component.html"),
            styles: [__webpack_require__(/*! ./footer.component.css */ "./src/app/components/footer/footer.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], FooterComponent);
    return FooterComponent;
}());



/***/ }),

/***/ "./src/app/components/navbar/navbar.component.css":
/*!********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.css ***!
  \********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "@import url('https://fonts.googleapis.com/css?family=Roboto+Condensed:300,300i,400,400i,700,700i|Roboto:100,100i,300,300i,400,400i,500,500i,700,700i,900,900i');\n\nbody {\n  margin: 0;\n  font-size: 1rem;\n  font-weight: normal;\n  line-height: 1.5;\n  color: #333;\n  background-color: #fff;\n  font-family: 'Roboto Condensed', sans-serif;\n}\n\n.navbar{\n\theight: 100px;\n\tbackground-color: #f2f2f2 !important;\n\tborder-radius: 4px;\n\tborder: none;\n\t/*margin: 10px 10px;*/\n}\n\n.navbar-header{\n\tposition: relative;\n\tline-height: 50px;\n}\n\n.navbar-header span{\n\tcolor: #212529;\n\tfont-size: 26px;\n\tmargin-left: 20px;\n}\n\n.navbar-header img{\n\tposition: absolute;\n\ttop: 5px;\n\tleft: 8px;\n\twidth: 120px;\n}\n\n.search-block{\n\twidth:33.33%;\n}\n\n.search-block .navbar-form{\n\tdisplay: block;\n\twidth: 100%;\n}\n\n.search-block .navbar-form div input {\n\twidth: 100%;\n\tpadding: 22px 15px;\n\tborder-radius: 25px;\n\tborder:none;\n\tbox-shadow: none;\n}\n\n.media-object{\n\twidth: 55px;\n\theight: 55px;\n\tborder-radius: 50%;\n\tvertical-align: middle;\n}\n\n.noti-icon{\n\tbackground-color: red;\n\tcolor: #fff;\n\tborder-radius: 50%;\n\ttext-align: center;\n\tpadding: 1px 5px;\n\tfont-size: 12px;\n}\n\n.media-right{\n\tposition: relative;\n}\n\n.media-body{\n\tline-height: 1.1;\n}\n\n.media-heading{\n\tfont-weight: bold;\n}\n\n.media-right span{\n\tposition: absolute;\n\tbottom: 0;\n\tleft: 35px;\n}\n\n/* Sidebar-nav */\n\n.ng-sidebar {\n    background: red;\n}\n\n#sidebar {\n    min-width: 100px;\n\tmax-width: 100px;\n\tbackground: #000000a6/*#000111*//*#54B4AB*/;/*#3B5899;*/\n    color: #000;\n    transition: all 0.3s;\n    height: 100%;\n    border: 0;\n    padding-top:14px; \n}\n\n#sidebar ul li{\n\tlist-style: none;\n /*padding: 1px 10px; */\n}\n\n#sidebar ul li a {\n    /*padding: 10px;*/\n    /*font-size: 1.7em;*/\n\tdisplay: block;\n\ttext-decoration: none;\n\tcolor:  #fff;\n\tfont-weight: 400;\n\n}\n\n#sidebar ul li a img{\n    /*padding: 10px;*/\n    height: 65%;\n    width: 65%;\n}\n\n#sidebar ul li a .fa{\n height: 65%;\n    width: 65%;\n}\n\n#sidebar ul li small{\ncolor: #fff;\n\t}\n\n#sidebar ul {\n\tpadding:0; \n}\n\n#sidebar ul li a:hover {\n    color: #7386D5;\n\t/*background: rgb(248, 246, 246);*/\n\toutline-style: none;\n}\n\n#sidebar ul li a:focus {\n    color: #000;\n\toutline-style: none;\n}\n\n._toggle{\n\tborder: .18rem solid rgb(70, 67, 67);\n\tbackground: transparent;\n\tborder-left: 0;\n\tborder-right: 0;\n\tcursor: pointer;\n\theight: 1.5rem;\n\tposition: relative;\n\twidth: 1.8rem;\n\toutline-style: none;\n\tleft: 10px;\n\ttop: -5px;\n\tz-index: 1;\n}\n\n._toggle::after {\n    background: #fff;\n    content: \"\";\n    height: .18rem;\n    left: 0;\n    margin-top: -.075rem;\n    position: absolute;\n    top: 50%;\n\twidth: 100%;\n\tbackground-color: rgb(70, 67, 67);\n}\n\n.sidebar-header {\n\tcolor:#3B5899;\n}\n\n/* /sidebar-nav */\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.html":
/*!*********************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.html ***!
  \*********************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<!-- <nav class=\"navbar navbar-expand-lg navbar-light bg-light\">\n  <a class=\"navbar-brand\" href=\"#\">Navbar</a>\n  <button class=\"navbar-toggler\" type=\"button\" data-toggle=\"collapse\" data-target=\"#navbarSupportedContent\" aria-controls=\"navbarSupportedContent\" aria-expanded=\"false\" aria-label=\"Toggle navigation\">\n    <span class=\"navbar-toggler-icon\"></span>\n  </button>\n\n  <div class=\"collapse navbar-collapse\" id=\"navbarSupportedContent\">\n    <ul class=\"navbar-nav mr-auto\">\n      <li class=\"nav-item active\">\n        <a class=\"nav-link\" href=\"/app\">Home <span class=\"sr-only\">(current)</span></a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/app/d2\"   routerLinkActive=\"active\">Link1</a>\n      </li>\n       <li class=\"nav-item\">\n        <a class=\"nav-link\" routerLink=\"/app/d1\"   routerLinkActive=\"active\">Link2</a>\n      </li>\n      <li class=\"nav-item\">\n        <a class=\"nav-link disabled\" href=\"#\">Disabled</a>\n      </li>\n    </ul>\n    <form class=\"form-inline my-2 my-lg-0\">\n      <input class=\"form-control mr-sm-2\" type=\"search\" placeholder=\"Search\" aria-label=\"Search\">\n      <button class=\"btn btn-outline-success my-2 my-sm-0\" type=\"submit\">Search</button>\n    </form>\n    <ul class=\"navbar-nav mr-auto\">\n    <li class=\"nav-item\">\n        <a class=\"nav-link\" (click)=\"Logout()\"   routerLinkActive=\"active\" routerLinkActive=\"active\">Logout</a>\n      </li>\n\n    </ul>\n  </div>\n</nav> -->\n\n<ng-sidebar-container style=\"position: fixed;\">\n    <!-- A sidebar -->\n  <ng-sidebar [(opened)]=\"_opened\" mode=\"over\" closeOnClickOutside=false>\n     <nav id=\"sidebar\">\n       <!--  <a class=\"navbar-brand text-center\" href=\"#\"><img src=\"assets/logo.png\" width=\"230px\" height=\"50px\" class=\"logo\" alt=\"brand logo\"></a> -->\n        <ul class=\"components text-center\">\n            <li>\n                <!-- <a routerLink=\"/app/d2\">Home</a> -->\n                <a href=\"#\">\n                  <img src=\"assets/home.png\">\n                </a>\n                  <small>Home</small>\n            </li>\n            <li>\n                <!-- <a routerLink=\"/app/d1\">Researcher</a> -->\n               <a href=\"#\"><i class=\"fa fa-user-circle\" aria-hidden=\"true\"></i></a> \n                <small>Researcher</small>\n            </li>\n            <li>\n                <a href=\"#\">Page </a>\n            </li>\n            <li>\n                <a href=\"#\">Portfolio</a>\n            </li>\n            <li>\n                <a *ngIf=\"role=='admin'\" routerLink=\"/app/setting\">Setting</a>\n            </li>\n             <li>\n                <a  (click)=\"Logout()\">Logout</a>\n            </li>\n        </ul>\n        </nav>\n  \n  </ng-sidebar>\n\n    <!-- Page content -->\n    <div ng-sidebar-content>\n      \n      <nav class=\"navbar navbar-dark bg-dark\">\n         \n          <div class=\"navbar-header\">\n              <button (click)=\"_toggleSidebar()\" class=\"_toggle\"></button>\n            <a class=\"navbar-brand\" href=\"#\"><img src=\"assets/logo.png\" alt=\"brand logo\"></a>\n          </div>\n          <div class=\"search-block\">\n            <form class=\"navbar-form\">\n            <div class=\"input-group\">\n              <input type=\"text\" class=\"form-control\" name=\"search\" id=\"search\" placeholder=\"Search\">\n             <span class=\"glyphicon glyphicon-search\"></span>\n            </div>\n           </form>\n          </div>\n        \n           <div class=\"nav navbar-nav navbar-right\">\n              <div class=\"media\">\n              <div class=\"media-body text-right mt-3 mr-2 p-0\">\n                <p class=\"media-heading mb-0 p-0\">{{name}}</p>\n                <small class=\"mb-0 p-0\">{{role}}</small>\n              </div>\n            <div class=\"media-right\">\n              <img src=\"assets/img_avatar.png\" class=\"media-object\" >\n              <span class=\"noti-icon\">2</span>\n            </div>\n            </div>\n            </div> \n          </nav> \n\n          <router-outlet></router-outlet>\n          <div class=\"footer\">\n            <app-footer></app-footer>\n          </div>\n    </div>\n\n  </ng-sidebar-container>\n\n\n"

/***/ }),

/***/ "./src/app/components/navbar/navbar.component.ts":
/*!*******************************************************!*\
  !*** ./src/app/components/navbar/navbar.component.ts ***!
  \*******************************************************/
/*! exports provided: NavbarComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "NavbarComponent", function() { return NavbarComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_Authservice__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/Authservice */ "./src/app/services/Authservice.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var NavbarComponent = /** @class */ (function () {
    function NavbarComponent(authService) {
        this.authService = authService;
        this.role = localStorage.getItem("role");
        this.name = localStorage.getItem("name");
        this._opened = false;
    }
    NavbarComponent.prototype._toggleSidebar = function () {
        this._opened = !this._opened;
    };
    NavbarComponent.prototype.ngOnInit = function () {
        console.log("----", this.role);
    };
    NavbarComponent.prototype.Logout = function () {
        this.authService.userLogout();
    };
    NavbarComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-navbar',
            template: __webpack_require__(/*! ./navbar.component.html */ "./src/app/components/navbar/navbar.component.html"),
            styles: [__webpack_require__(/*! ./navbar.component.css */ "./src/app/components/navbar/navbar.component.css")]
        }),
        __metadata("design:paramtypes", [_services_Authservice__WEBPACK_IMPORTED_MODULE_1__["AuthService"]])
    ], NavbarComponent);
    return NavbarComponent;
}());



/***/ }),

/***/ "./src/app/d2/d2.service.ts":
/*!**********************************!*\
  !*** ./src/app/d2/d2.service.ts ***!
  \**********************************/
/*! exports provided: D2Service */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "D2Service", function() { return D2Service; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var D2Service = /** @class */ (function () {
    function D2Service() {
    }
    D2Service.prototype.masterDataCreation = function (data) {
        console.log("data", data);
    };
    D2Service = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [])
    ], D2Service);
    return D2Service;
}());



/***/ }),

/***/ "./src/app/dashboard/dashboard.component.css":
/*!***************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.css ***!
  \***************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".footer, footer {\n\t/*position: fixed;*/\n\tposition: fixed;\n    bottom: 0;\n\tvertical-align: bottom;\n\ttop:96%;\n}"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.html":
/*!****************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.html ***!
  \****************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-navbar></app-navbar>"

/***/ }),

/***/ "./src/app/dashboard/dashboard.component.ts":
/*!**************************************************!*\
  !*** ./src/app/dashboard/dashboard.component.ts ***!
  \**************************************************/
/*! exports provided: DashboardComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "DashboardComponent", function() { return DashboardComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DashboardComponent = /** @class */ (function () {
    function DashboardComponent() {
    }
    DashboardComponent.prototype.ngOnInit = function () {
    };
    DashboardComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-dashboard',
            template: __webpack_require__(/*! ./dashboard.component.html */ "./src/app/dashboard/dashboard.component.html"),
            styles: [__webpack_require__(/*! ./dashboard.component.css */ "./src/app/dashboard/dashboard.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], DashboardComponent);
    return DashboardComponent;
}());



/***/ }),

/***/ "./src/app/login/login.component.css":
/*!*******************************************!*\
  !*** ./src/app/login/login.component.css ***!
  \*******************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ".login-form {\n    width: 340px;\n      margin: 50px auto;\n      /*margin-left: -18%;*/\n      width: 50%;  \n  }\n    .login-form form {\n      margin-bottom: 15px;\n        background: #f7f7f7;\n        box-shadow: 0px 2px 2px rgba(0, 0, 0, 0.3);\n        padding: 30px;\n    }\n    .login-form h2 {\n        margin: 0 0 15px;\n    }\n    .form-control, .btn {\n        min-height: 38px;\n        border-radius: 2px;\n    }\n    .btn {        \n        font-size: 15px;\n        font-weight: bold;\n    }\n    .login{\n        /*background-color: lightgreen;*/\n        background-image: url('/assets/loginback.jpg');\n        padding: 7% 9% 9% 9%;\n        overflow: hidden;\n        background-repeat: no-repeat;\n        background-size: 100% 100%;\n    }\n    .login-logo img{\n        width: 35%;\n    }"

/***/ }),

/***/ "./src/app/login/login.component.html":
/*!********************************************!*\
  !*** ./src/app/login/login.component.html ***!
  \********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "\n<div class=\"login-form\">\n    <form  (submit)=\"login($event, email.value, password.value)\">\n        <h2 class=\"text-center\">Log in</h2>       \n        <div class=\"form-group\">\n            <input type=\"text\"  #email class=\"form-control\" placeholder=\"Username\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n            <input type=\"password\"  #password  class=\"form-control\" placeholder=\"Password\" required=\"required\">\n        </div>\n        <div class=\"form-group\">\n            <button type=\"submit\" class=\"btn btn-primary btn-block\">Log in</button>\n        </div>\n        <div class=\"clearfix\">\n            <label class=\"pull-left checkbox-inline\"><input type=\"checkbox\"> Remember me</label>\n            <a href=\"#\" class=\"pull-right\">Forgot Password?</a>\n        </div>        \n    </form>\n    <p class=\"text-center\"><a href=\"#\">Create an Account</a></p>\n</div>\n"

/***/ }),

/***/ "./src/app/login/login.component.ts":
/*!******************************************!*\
  !*** ./src/app/login/login.component.ts ***!
  \******************************************/
/*! exports provided: LoginComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginComponent", function() { return LoginComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var _login_service__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./login.service */ "./src/app/login/login.service.ts");
/* harmony import */ var _services_Authservice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../services/Authservice */ "./src/app/services/Authservice.ts");
/* harmony import */ var rxjs_Rx__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! rxjs/Rx */ "./node_modules/rxjs-compat/_esm5/Rx.js");
/* harmony import */ var ngx_toastr__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ngx-toastr */ "./node_modules/ngx-toastr/fesm5/ngx-toastr.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};






var LoginComponent = /** @class */ (function () {
    function LoginComponent(_router, toastr, loginService, authService) {
        this._router = _router;
        this.toastr = toastr;
        this.loginService = loginService;
        this.authService = authService;
    }
    LoginComponent.prototype.ngOnInit = function () {
        this.auth_verified = this.authService.useJwtHelper();
        console.log('auth_verified:::::' + this.auth_verified);
        if (this.auth_verified) {
            this._router.navigate(['/app/d1']);
        }
    };
    /*login($event,email,password){
    
      if(email && password !== null){
         console.log("----login---",email)
         this.loginService.login(email,password)
         //this._router.navigate(['../app'])
      }
      else{
        console.log("---else login")
      }*/
    LoginComponent.prototype.login = function (event, email, password) {
        var _this = this;
        if (email && password != null) {
            console.log("not null");
            event.preventDefault();
            this.loginService.login(email, password)
                .subscribe(function (response) {
                console.log("-----response", response.role);
                if (response.save === true) {
                    localStorage.apiToken = response.token;
                    _this.showSuccess();
                    var role = response.role;
                    _this.name = response.name;
                    if (role == 3) {
                        _this.roletype = "admin";
                    }
                    else if (role == 2) {
                        _this.roletype = "Reviewer";
                    }
                    else if (role == 1) {
                        _this.roletype = "Researcher";
                    }
                    localStorage.setItem('name', _this.name);
                    localStorage.setItem('role', _this.roletype);
                    switch (role) {
                        case 3:
                            _this._router.navigate(['/app/d2']);
                            break;
                        case 2:
                            _this._router.navigate(['/app/d1']);
                            break;
                        case 1:
                            _this._router.navigate(['/app/d1']);
                            break;
                        default:
                            // code...
                            break;
                    }
                    /* this._router.navigate(['/app/d2']);*/
                }
                else if (response.save === false) {
                    _this.showError();
                    console.log("password or user not matching 11");
                }
            }, this.handleError);
        }
        else {
            console.log("password or user not matching");
            this.showError();
        }
    };
    LoginComponent.prototype.handleError = function (error) {
        console.log(error.status);
    };
    LoginComponent.prototype.showSuccess = function () {
        this.toastr.success('Login', 'Success!');
    };
    LoginComponent.prototype.showError = function () {
        this.toastr.error('password or user not matching!', 'Error!');
    };
    LoginComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-login',
            template: __webpack_require__(/*! ./login.component.html */ "./src/app/login/login.component.html"),
            styles: [__webpack_require__(/*! ./login.component.css */ "./src/app/login/login.component.css")]
        }),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], ngx_toastr__WEBPACK_IMPORTED_MODULE_5__["ToastrService"],
            _login_service__WEBPACK_IMPORTED_MODULE_2__["LoginService"], _services_Authservice__WEBPACK_IMPORTED_MODULE_3__["AuthService"]])
    ], LoginComponent);
    return LoginComponent;
}());



/***/ }),

/***/ "./src/app/login/login.service.ts":
/*!****************************************!*\
  !*** ./src/app/login/login.service.ts ***!
  \****************************************/
/*! exports provided: LoginService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LoginService", function() { return LoginService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var LoginService = /** @class */ (function () {
    function LoginService(_http) {
        this._http = _http;
    }
    LoginService.prototype.login = function (email, password) {
        var headers = new _angular_http__WEBPACK_IMPORTED_MODULE_1__["Headers"]();
        var data = [{ username: email, password: password }];
        console.log("mail " + JSON.stringify(data));
        headers.append('Content-Type', 'application/json');
        return this._http.post('/api/login', JSON.stringify(data), { headers: headers, withCredentials: true })
            .map(function (res) { return res.json(); });
    };
    /* signUp(data) {
       console.log("data is here " + JSON.stringify(data))
       const headers = new Headers();
       headers.append('Content-Type', 'application/json');
       return this._http.post('/api/signup', JSON.stringify(data), {headers : headers, withCredentials: true})
         .map(res => res.json());
     }*/
    LoginService.prototype.test = function () {
        /*return this._http.get('/api/getuser').toPromise().then((response) =>
    console.log("-------------",response.json())
          );*/
        return this._http.get('/api/getuser').map(function (r) { return r.json(); });
    };
    LoginService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_http__WEBPACK_IMPORTED_MODULE_1__["Http"]])
    ], LoginService);
    return LoginService;
}());



/***/ }),

/***/ "./src/app/logout/logout.component.css":
/*!*********************************************!*\
  !*** ./src/app/logout/logout.component.css ***!
  \*********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/logout/logout.component.html":
/*!**********************************************!*\
  !*** ./src/app/logout/logout.component.html ***!
  \**********************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<p>\n  logout works!\n</p>\n"

/***/ }),

/***/ "./src/app/logout/logout.component.ts":
/*!********************************************!*\
  !*** ./src/app/logout/logout.component.ts ***!
  \********************************************/
/*! exports provided: LogoutComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogoutComponent", function() { return LogoutComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var LogoutComponent = /** @class */ (function () {
    function LogoutComponent() {
    }
    LogoutComponent.prototype.ngOnInit = function () {
    };
    LogoutComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-logout',
            template: __webpack_require__(/*! ./logout.component.html */ "./src/app/logout/logout.component.html"),
            styles: [__webpack_require__(/*! ./logout.component.css */ "./src/app/logout/logout.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], LogoutComponent);
    return LogoutComponent;
}());



/***/ }),

/***/ "./src/app/services/Authservice.ts":
/*!*****************************************!*\
  !*** ./src/app/services/Authservice.ts ***!
  \*****************************************/
/*! exports provided: AuthService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "AuthService", function() { return AuthService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_router__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/router */ "./node_modules/@angular/router/fesm5/router.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! angular2-jwt */ "./node_modules/angular2-jwt/angular2-jwt.js");
/* harmony import */ var angular2_jwt__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(angular2_jwt__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _angular_http__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/http */ "./node_modules/@angular/http/fesm5/http.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};





var AuthService = /** @class */ (function () {
    function AuthService(router, authHttp, _http) {
        this.router = router;
        this.authHttp = authHttp;
        this._http = _http;
        this.jwtHelper = new angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["JwtHelper"]();
    }
    AuthService.prototype.useJwtHelper = function () {
        if (localStorage.getItem('apiToken')) {
            var token = localStorage.getItem('apiToken');
            console.log('token::::' + token);
            if (!this.jwtHelper.isTokenExpired(token)) {
                return true;
            }
            else {
                localStorage.clear();
                return false;
            }
        }
        return false;
    };
    AuthService.prototype.userLogout = function () {
        console.log('Signing Out...');
        localStorage.clear();
        this.router.navigate(['/login']);
        /*return this.authHttp.get('http://localhost:3000/login');*/
    };
    AuthService.prototype.canActivate = function () {
        if (localStorage.getItem('apiToken') !== null) {
            console.log("getting true..");
            return true;
        }
        else {
            console.log("canactive is blocking you sorry");
            this.router.navigate(['']);
            return false;
        }
    };
    AuthService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])(),
        __metadata("design:paramtypes", [_angular_router__WEBPACK_IMPORTED_MODULE_1__["Router"], angular2_jwt__WEBPACK_IMPORTED_MODULE_2__["AuthHttp"], _angular_http__WEBPACK_IMPORTED_MODULE_3__["Http"]])
    ], AuthService);
    return AuthService;
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
// `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.
var environment = {
    production: false
};
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
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
    .catch(function (err) { return console.error(err); });


/***/ }),

/***/ 0:
/*!***************************!*\
  !*** multi ./src/main.ts ***!
  \***************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__(/*! /home/sbees1/Ronak/Angular/hero-auro/Tonny-abhi-dash/src/main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map