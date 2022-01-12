[![npm version](https://img.shields.io/npm/v/concordialang-codeceptjs-testcafe.svg?style=for-the-badge&color=green)](https://badge.fury.io/js/concordialang-codeceptjs-testcafe)
[![Build Status](https://img.shields.io/github/workflow/status/thiagodp/concordialang-codeceptjs-testcafe/test?style=for-the-badge)](https://github.com/thiagodp/concordialang-codeceptjs-testcafe/actions)
[![GitHub last commit](https://img.shields.io/github/last-commit/thiagodp/concordialang-codeceptjs-testcafe.svg?style=for-the-badge)](https://github.com/thiagodp/concordialang-codeceptjs-testcafe/releases)

# concordialang-codeceptjs-testcafe

> 🔌 Concordia compiler plug-in for CodeceptJS with TestCafé

Generates and executes test scripts for [CodeceptJS](https://codecept.io) with [TestCafé](https://devexpress.github.io/testcafe) aiming to verify **web** applications.


## Install

Requirements:
- [NodeJS](https://nodejs.org/) 12 or later.
- [Concordia Compiler](https://concordialang.org) 2.

Installation via Concordia Compiler:

```bash
concordia --plugin-install codeceptjs-testcafe
```

Installation via NPM:

```bash
npm i -D concordialang-codeceptjs-testcafe
```

Note: You can also use PNPM or Yarn.

## See also

- [katalon-concordia](https://github.com/thiagodp/katalon-concordia): Browser extension that converts [Katalon Recorder](https://chrome.google.com/webstore/detail/katalon-recorder-selenium/ljdobmomdgdljniojadhoplhkpialdid)'s recordings into [Concordia Language](https://concordialang.org). Very useful to capture web elements' identification without inspecting them with the browser or looking into their source code.

- [Integration with CodeceptJS](https://github.com/thiagodp/concordialang-codeceptjs-core#documentation)

## License

![AGPL](https://www.gnu.org/graphics/agplv3-88x31.png) © [Thiago Delgado Pinto](https://github.com/thiagodp)

[GNU Affero General Public License version 3](LICENSE.txt)
