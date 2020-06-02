import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
/**
 * Plug-in for CodeceptJS with TestCafé.
 *
 * @author Thiago Delgado Pinto
 */
export declare class CodeceptJSTestCafe extends CodeceptJS {
    protected createTestScriptExecutor(): TestScriptExecutor;
}
