"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CodeceptJSTestCafe = void 0;
const concordialang_codeceptjs_core_1 = require("concordialang-codeceptjs-core");
const TestCafeHelperConfiguration_1 = require("./TestCafeHelperConfiguration");
/**
 * Plug-in for CodeceptJS with TestCafé.
 *
 * @author Thiago Delgado Pinto
 */
class CodeceptJSTestCafe extends concordialang_codeceptjs_core_1.CodeceptJS {
    createTestScriptExecutor() {
        return new concordialang_codeceptjs_core_1.TestScriptExecutor([new TestCafeHelperConfiguration_1.TestCafeHelperConfiguration()]);
    }
}
exports.CodeceptJSTestCafe = CodeceptJSTestCafe;
