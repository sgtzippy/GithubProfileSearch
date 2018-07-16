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
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var _angular_forms__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @angular/forms */ "./node_modules/@angular/forms/fesm5/forms.js");
/* harmony import */ var _components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ./components/app-component/app.component */ "./src/app/components/app-component/app.component.ts");
/* harmony import */ var _components_search_profile_component_search_profile_component_component__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ./components/search-profile-component/search-profile-component.component */ "./src/app/components/search-profile-component/search-profile-component.component.ts");
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
                _components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"],
                _components_search_profile_component_search_profile_component_component__WEBPACK_IMPORTED_MODULE_5__["SearchProfileComponentComponent"]
            ],
            imports: [
                _angular_platform_browser__WEBPACK_IMPORTED_MODULE_0__["BrowserModule"], _angular_common_http__WEBPACK_IMPORTED_MODULE_2__["HttpClientModule"], _angular_forms__WEBPACK_IMPORTED_MODULE_3__["FormsModule"]
            ],
            providers: [],
            bootstrap: [_components_app_component_app_component__WEBPACK_IMPORTED_MODULE_4__["AppComponent"]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "./src/app/components/app-component/app.component.css":
/*!************************************************************!*\
  !*** ./src/app/components/app-component/app.component.css ***!
  \************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/app-component/app.component.html":
/*!*************************************************************!*\
  !*** ./src/app/components/app-component/app.component.html ***!
  \*************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<app-search-profile-component></app-search-profile-component>"

/***/ }),

/***/ "./src/app/components/app-component/app.component.ts":
/*!***********************************************************!*\
  !*** ./src/app/components/app-component/app.component.ts ***!
  \***********************************************************/
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
        this.title = 'app';
    }
    AppComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-root',
            template: __webpack_require__(/*! ./app.component.html */ "./src/app/components/app-component/app.component.html"),
            styles: [__webpack_require__(/*! ./app.component.css */ "./src/app/components/app-component/app.component.css")]
        })
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "./src/app/components/search-profile-component/search-profile-component.component.css":
/*!********************************************************************************************!*\
  !*** ./src/app/components/search-profile-component/search-profile-component.component.css ***!
  \********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = ""

/***/ }),

/***/ "./src/app/components/search-profile-component/search-profile-component.component.html":
/*!*********************************************************************************************!*\
  !*** ./src/app/components/search-profile-component/search-profile-component.component.html ***!
  \*********************************************************************************************/
/*! no static exports found */
/***/ (function(module, exports) {

module.exports = "<div class=\"row\">\r\n    <div class=\"col-sm-12\">\r\n        <h1>Github Profiles Search</h1>\r\n    </div>\r\n    <div class=\"col-sm-12\">\r\n        <form (ngSubmit)=\"search(searchBox.value)\" #searchForm=\"ngForm\">\r\n            <div class=\"form-group\">\r\n                <input #searchBox id=\"search-box\" placeholder=\"Search Text\" class=\"form-control\" />\r\n            </div>\r\n            <button type=\"submit\" class=\"btn btn-primary\">Search</button>\r\n        </form>\r\n    </div>\r\n</div>\r\n\r\n<div class=\"row\" *ngIf=\"profileSearchResponse\">\r\n    <div class=\"col-sm-12\">\r\n        Total Matching Users: {{profileSearchResponse.total_count}}\r\n    </div>\r\n\r\n    <div class=\"col-sm-3\" *ngFor=\"let profile of profileSearchResponse.items | slice:0:10\">\r\n        <div class=\"card border-primary\" style=\"width: 18rem;\">\r\n            <img class=\"card-img-top\" src=\"{{profile.avatar_url}}\" alt=\"Github User\">\r\n            <div class=\"card-body\">\r\n                <h5 class=\"card-title\">{{profile.login}}</h5>\r\n                <p class=\"card-text\">Type: {{profile.type}}</p>\r\n                <p class=\"card-text\">Is Site Admin: {{profile.site_admin}}</p>\r\n                <p class=\"card-text\">Score: {{profile.score}}</p>\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n<div class=\"row\" *ngIf=\"error\">\r\n    <div class=\"col-sm-12\">\r\n        {{error}}\r\n    </div>\r\n</div>\r\n\n"

/***/ }),

/***/ "./src/app/components/search-profile-component/search-profile-component.component.ts":
/*!*******************************************************************************************!*\
  !*** ./src/app/components/search-profile-component/search-profile-component.component.ts ***!
  \*******************************************************************************************/
/*! exports provided: SearchProfileComponentComponent */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProfileComponentComponent", function() { return SearchProfileComponentComponent; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _services_search_profile_service_search_profile_service_service__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../services/search-profile-service/search-profile-service.service */ "./src/app/services/search-profile-service/search-profile-service.service.ts");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};


var SearchProfileComponentComponent = /** @class */ (function () {
    function SearchProfileComponentComponent(searchProfileServiceService) {
        this.searchProfileServiceService = searchProfileServiceService;
    }
    SearchProfileComponentComponent.prototype.ngOnInit = function () {
    };
    SearchProfileComponentComponent.prototype.search = function (query) {
        var _this = this;
        this.searchProfileServiceService.searchProfiles(query)
            .subscribe(function (response) {
            _this.profileSearchResponse = response;
            _this.error = null;
        }, function (error) {
            _this.error = error;
            _this.profileSearchResponse = null;
        });
    };
    SearchProfileComponentComponent = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Component"])({
            selector: 'app-search-profile-component',
            template: __webpack_require__(/*! ./search-profile-component.component.html */ "./src/app/components/search-profile-component/search-profile-component.component.html"),
            styles: [__webpack_require__(/*! ./search-profile-component.component.css */ "./src/app/components/search-profile-component/search-profile-component.component.css")]
        }),
        __metadata("design:paramtypes", [_services_search_profile_service_search_profile_service_service__WEBPACK_IMPORTED_MODULE_1__["SearchProfileServiceService"]])
    ], SearchProfileComponentComponent);
    return SearchProfileComponentComponent;
}());



/***/ }),

/***/ "./src/app/services/search-profile-service/search-profile-service.service.ts":
/*!***********************************************************************************!*\
  !*** ./src/app/services/search-profile-service/search-profile-service.service.ts ***!
  \***********************************************************************************/
/*! exports provided: SearchProfileServiceService */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "SearchProfileServiceService", function() { return SearchProfileServiceService; });
/* harmony import */ var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @angular/core */ "./node_modules/@angular/core/fesm5/core.js");
/* harmony import */ var _angular_common_http__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @angular/common/http */ "./node_modules/@angular/common/fesm5/http.js");
/* harmony import */ var rxjs__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! rxjs */ "./node_modules/rxjs/_esm5/index.js");
/* harmony import */ var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! rxjs/operators */ "./node_modules/rxjs/_esm5/operators/index.js");
var __decorate = (undefined && undefined.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (undefined && undefined.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};




var SearchProfileServiceService = /** @class */ (function () {
    function SearchProfileServiceService(http) {
        this.http = http;
        this.directApiUrl = 'https://api.github.com/search/users';
    }
    SearchProfileServiceService.prototype.searchProfiles = function (query) {
        // if no query, return empty profile response.
        if (!query.trim()) {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["of"])(null);
        }
        // Manually throw error if xxxx detected
        if (query.trim() == 'xxxx') {
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])('Can not search for "xxxx".');
        }
        return this.http.get(this.directApiUrl + "?q=" + query.trim()).pipe(Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["tap"])(function (_) { return console.log("found profiles matching \"" + query + "\""); }), Object(rxjs_operators__WEBPACK_IMPORTED_MODULE_3__["catchError"])(this.handleError('searchProfiles', null)));
    };
    SearchProfileServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // Log message to console. Normally we would log this to some remote logging server. Then rethrow error so UI can respond.
            console.error(error);
            return Object(rxjs__WEBPACK_IMPORTED_MODULE_2__["throwError"])(error);
        };
    };
    SearchProfileServiceService = __decorate([
        Object(_angular_core__WEBPACK_IMPORTED_MODULE_0__["Injectable"])({
            providedIn: 'root'
        }),
        __metadata("design:paramtypes", [_angular_common_http__WEBPACK_IMPORTED_MODULE_1__["HttpClient"]])
    ], SearchProfileServiceService);
    return SearchProfileServiceService;
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

module.exports = __webpack_require__(/*! C:\Projects\GithubProfileSearch\GithubProfileSearch\Apps\GithubProfileSearch\src\main.ts */"./src/main.ts");


/***/ })

},[[0,"runtime","vendor"]]]);
//# sourceMappingURL=main.js.map