var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var SearchProfileServiceService = (function () {
    function SearchProfileServiceService(http) {
        this.http = http;
        // This baseUrl would normally be passed in from the web.config and be used throughout the system in all the services. For purposes of this application it's hard coded.
        this.baseUrl = 'http://localhost:57055/api';
        this.searchProfilesUrl = 'searchprofiles';
        this.directApiUrl = 'https://api.github.com/search/users';
    }
    SearchProfileServiceService.prototype.searchProfiles = function (query) {
        if (!query.trim()) {
            // if not search term, return empty profile array.
            return rxjs_1.of(null);
        }
        return this.http.get(this.directApiUrl + "?q=" + query).pipe(operators_1.tap(function (_) { return console.error("found profiles matching \"" + query + "\""); }), operators_1.catchError(this.handleError('searchProfiles', null)));
        //return this.http.get<ProfileSearchResponse>(`${this.baseUrl}/${this.searchProfilesUrl}?query=${query}`).pipe(
        //    tap(_ => console.error(`found profiles matching "${query}"`)),
        //    catchError(this.handleError<ProfileSearchResponse>('searchProfiles', null))
        //);
    };
    SearchProfileServiceService.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            // Log message to console. Normally we would log this to some remote logging server. Then rethrow error so UI can respond.
            console.error(error);
            throw new Error(error);
        };
    };
    SearchProfileServiceService = __decorate([
        core_1.Injectable({
            providedIn: 'root'
        })
    ], SearchProfileServiceService);
    return SearchProfileServiceService;
})();
exports.SearchProfileServiceService = SearchProfileServiceService;
