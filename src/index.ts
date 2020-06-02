import { CodeceptJS, TestScriptExecutor } from 'concordialang-codeceptjs-core';
import { TestCafeHelperConfiguration } from './TestCafeHelperConfiguration';

/**
 * Plug-in for CodeceptJS with TestCafé.
 *
 * @author Thiago Delgado Pinto
 */
export class CodeceptJSTestCafe extends CodeceptJS {

    protected createTestScriptExecutor(): TestScriptExecutor {
        return new TestScriptExecutor(
            [ new TestCafeHelperConfiguration() ]
        );
    }

}