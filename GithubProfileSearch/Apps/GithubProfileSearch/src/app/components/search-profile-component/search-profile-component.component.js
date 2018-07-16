var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var core_1 = require('@angular/core');
var rxjs_1 = require('rxjs');
var operators_1 = require('rxjs/operators');
var SearchProfileComponentComponent = (function () {
    function SearchProfileComponentComponent(searchProfileServiceService) {
        this.searchProfileServiceService = searchProfileServiceService;
        this.searchQuery = new rxjs_1.Subject();
    }
    SearchProfileComponentComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.profileSearchResponse = this.searchQuery.pipe(
        // ignore not new query
        operators_1.distinctUntilChanged(), 
        // switch to new search observable each time the query changes
        operators_1.switchMap(function (query) { return _this.searchProfileServiceService.searchProfiles(query).pipe(operators_1.tap(function (_) { return console.error("found profiles matching \"" + query + "\""); }), operators_1.catchError(_this.handleError('SearchProfileComponentComponent switchMap', null))); }));
    };
    SearchProfileComponentComponent.prototype.search = function (query) {
        this.searchQuery.next(query);
    };
    SearchProfileComponentComponent.prototype.handleError = function (operation, result) {
        if (operation === void 0) { operation = 'operation'; }
        return function (error) {
            console.log('Error handler in the component reached.');
            return rxjs_1.of(result);
        };
    };
    SearchProfileComponentComponent = __decorate([
        core_1.Component({
            selector: 'app-search-profile-component',
            templateUrl: './search-profile-component.component.html',
            styleUrls: ['./search-profile-component.component.css']
        })
    ], SearchProfileComponentComponent);
    return SearchProfileComponentComponent;
})();
exports.SearchProfileComponentComponent = SearchProfileComponentComponent;
