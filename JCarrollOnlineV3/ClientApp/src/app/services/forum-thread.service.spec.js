"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var forum_thread_service_1 = require("./forum-thread.service");
describe('ForumThreadService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(forum_thread_service_1.ForumThreadService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=forum-thread.service.spec.js.map