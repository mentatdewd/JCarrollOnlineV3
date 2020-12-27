"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var cache_service_1 = require("./cache.service");
describe('CacheService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(cache_service_1.CacheService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=cache.service.spec.js.map