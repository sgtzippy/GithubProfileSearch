var testing_1 = require('@angular/core/testing');
var search_profile_service_service_1 = require('./search-profile-service.service');
describe('SearchProfileServiceService', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [search_profile_service_service_1.SearchProfileServiceService]
        });
    });
    it('should be created', testing_1.inject([search_profile_service_service_1.SearchProfileServiceService], function (service) {
        expect(service).toBeTruthy();
    }));
});
