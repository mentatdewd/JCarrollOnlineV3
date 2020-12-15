"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var access_guard_1 = require("./access.guard");
describe('AccessGuardGuard', function () {
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({
            providers: [access_guard_1.AccessGuard]
        });
    });
    it('should ...', testing_1.inject([access_guard_1.AccessGuard], function (guard) {
        expect(guard).toBeTruthy();
    }));
});
//# sourceMappingURL=access.guard.spec.js.map