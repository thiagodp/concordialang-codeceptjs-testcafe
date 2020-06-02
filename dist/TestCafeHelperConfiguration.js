"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.TestCafeHelperConfiguration = void 0;
class TestCafeHelperConfiguration {
    constructor(_browser = 'chrome', _url = 'http://localhost') {
        this._browser = _browser;
        this._url = _url;
    }
    /** @inheritdoc */
    name() {
        return 'TestCafe';
    }
    /** @inheritdoc */
    generate(execOptions) {
        const [browser] = execOptions.target
            ? execOptions.target.split(',').map(t => t.trim())
            : [this._browser];
        return {
            "browser": browser,
            "url": this._url,
            "show": !(true === execOptions.headless),
        };
    }
}
exports.TestCafeHelperConfiguration = TestCafeHelperConfiguration;
