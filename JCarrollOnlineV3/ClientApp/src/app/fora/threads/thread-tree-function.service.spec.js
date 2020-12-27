"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var testing_1 = require("@angular/core/testing");
var thread_tree_function_service_1 = require("./thread-tree-function.service");
describe('ThreadTreeFunctionService', function () {
    var service;
    beforeEach(function () {
        testing_1.TestBed.configureTestingModule({});
        service = testing_1.TestBed.inject(thread_tree_function_service_1.ThreadTreeFunctionService);
    });
    it('should be created', function () {
        expect(service).toBeTruthy();
    });
});
//# sourceMappingURL=thread-tree-function.service.spec.js.map