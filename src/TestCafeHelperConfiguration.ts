import { HelperConfiguration } from 'concordialang-codeceptjs-core';
import { TestScriptExecutionOptions } from 'concordialang-plugin';

export class TestCafeHelperConfiguration implements HelperConfiguration {

    constructor(
        public readonly _require: string = './node_modules/codeceptjs/lib/helper/TestCafe',
        public readonly _browser: string = 'chrome',
        public readonly _url: string = 'http://localhost',
    ) {
    }

    /** @inheritdoc */
    name() {
        return 'TestCafe';
    }

    /** @inheritdoc */
    generate( execOptions: TestScriptExecutionOptions ): any {
        const [ browser ] = execOptions.target
            ? execOptions.target.split( ',' ).map( t => t.trim() )
            : [ this._browser ];
        return  {
            "require": this._require,
            "browser": browser,
            "url": this._url,
            "show": !( true === execOptions.headless ),
        };
    }

}