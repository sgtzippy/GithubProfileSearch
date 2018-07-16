var testing_1 = require('@angular/core/testing');
var search_profile_component_component_1 = require('./search-profile-component.component');
describe('SearchProfileComponentComponent', function () {
    var component;
    var fixture;
    beforeEach(testing_1.async(function () {
        testing_1.TestBed.configureTestingModule({
            declarations: [search_profile_component_component_1.SearchProfileComponentComponent]
        })
            .compileComponents();
    }));
    beforeEach(function () {
        fixture = testing_1.TestBed.createComponent(search_profile_component_component_1.SearchProfileComponentComponent);
        component = fixture.componentInstance;
        fixture.detectChanges();
    });
    it('should create', function () {
        expect(component).toBeTruthy();
    });
});
