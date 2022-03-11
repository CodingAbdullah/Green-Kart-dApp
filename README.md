<p align="center"><img src="https://trufflesuite.com/img/truffle-logo-dark.svg" width="200"></p>

-----------------------


Truffle is a development environment, testing framework and asset pipeline for Ethereum, aiming to make life as an Ethereum developer easier. With Truffle, you get:

* Built-in smart contract compilation, linking, deployment and binary management.
* Automated contract testing with Mocha and Chai.
* Configurable build pipeline with support for custom build processes.
* Scriptable deployment & migrations framework.
* Network management for deploying to many public & private networks.
* Interactive console for direct contract communication.
* Instant rebuilding of assets during development.
* External script runner that executes scripts within a Truffle environment.

| ℹ️ **Contributors**: Please see the [Development](#development) section of this README. |
| --- |

### Install

```
$ npm install -g truffle
```

*Note: To avoid any strange permissions errors, we recommend using [nvm](https://github.com/nvm-sh/nvm).*

### Quick Usage

For a default set of contracts and tests, run the following within an empty project directory:

```
$ truffle init
```

From there, you can run `truffle compile`, `truffle migrate` and `truffle test` to compile your contracts, deploy those contracts to the network, and run their associated unit tests.

Truffle comes bundled with a local development blockchain server that launches automatically when you invoke the commands  above. If you'd like to [configure a more advanced development environment](https://trufflesuite.com/docs/advanced/configuration) we recommend you install the blockchain server separately by running `npm install -g ganache-cli` at the command line.

+  [ganache](https://github.com/trufflesuite/ganache): a command-line version of Truffle's blockchain server.
+  [ganache-ui](https://github.com/trufflesuite/ganache-ui): A GUI for the server that displays your transaction history and chain state.


### Documentation

Please see the [Official Truffle Documentation](https://trufflesuite.com/docs/) for guides, tips, and examples.

-----------------------

<h2 align="center">
  <a href="#readme" title="Ganache README.md"><img alt="Ganache" src="https://trufflesuite.github.io/ganache/assets/img/ganache-logo-dark.svg" alt="Ganache" width="160"/></a>
</h2>

<h3 align="center">
  A tool for creating a local blockchain for fast Ethereum development.
</h3>

<p align="center">
  <a title="ganache on npm" href="https://www.npmjs.com/ganache"><img alt="" src="https://img.shields.io/npm/v/ganache/latest?label=npm&amp;color=b98b5b&amp;style=for-the-badge&amp;labelColor=3c2c30&amp;logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCA0MCA0MCI+PHBhdGggZD0iTTAgMGg0MHY0MEgwVjB6IiBmaWxsPSIjZmZmIi8+PHBhdGggZmlsbD0iIzMzMjUyYSIgZD0iTTcgN2gyNnYyNmgtN1YxNGgtNnYxOUg3eiIvPjwvc3ZnPgo=" /></a>
  <a href="https://www.trufflesuite.com/dashboard" title="Trufflesuite download dashboard"><img alt="" src="https://img.shields.io/npm/dm/ganache?color=b98b5b&amp;style=for-the-badge&amp;labelColor=3c2c30&amp;logo=data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAxOTAuMzEgMjE0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6I2U0YTY2Mzt9LmNscy0ye2ZpbGw6IzVlNDY0ZDt9LmNscy0ze2ZpbGw6I2ZmZjt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmdhbmFjaGUtbG9nb21hcms8L3RpdGxlPjxnIGlkPSJMYXllcl8yIiBkYXRhLW5hbWU9IkxheWVyIDIiPjxnIGlkPSJMYXllcl84IiBkYXRhLW5hbWU9IkxheWVyIDgiPjxwYXRoIGNsYXNzPSJjbHMtMSIgZD0iTTE2NS4zOCwxNjAuMzFjMi4yNCwwLDMtLjUyLDQuMDYtMi4zM3MuNTUtNC43NS41MS01LjU1Yy0uMS0xLjc2LS42OS0zLjcyLS43Ni00LjctLjA1LS42LDAtNC40My4wOS02LDEuMzQtMjQuODQsMTItMzAuNzUsMTUuMDctMzEuNDJhOC41OSw4LjU5LDAsMCwxLDUuOTQuNGwwLTM4aDBsMC0uNTRWNjIuMDljMC01LjQ5LTMuOTEtMTIuMjQtOC42Ni0xNWwtNzcuODctNDVDOTktLjY5LDkxLjE5LS42OSw4Ni40MywyLjA2TDguNjUsNDdDMy44OSw0OS43MSwwLDU2LjQ2LDAsNjJ2OS44MnMwLC4xMSwwLC4xN1Y4Ni4zM2MuNDUuMjUuOTEuNTEsMS4zNi43OSwxLjUsMSwzLDEuNTUsNC41MSwyLjZhNjguNDMsNjguNDMsMCwwLDEsMTIsOS4yOGMuNy42OCwzLjA3LDMuNjYsMy42NCw0LjM2YTQ3LjIyLDQ3LjIyLDAsMCwwLDUuNzcsNi42LDIwLjYyLDIwLjYyLDAsMCwwLDMuODcsMi43OGMyLjI4LDEuMTksNi4wNy45Miw4LC4wNywxNC44Mi02LjQyLDI0LjEyLTMuMiwyOC40MS0uNjIsMTAuNjEsNi4zNywxNC4xNSwxNS4yOCwxNS4yOCwyNi4xYTI5LjIyLDI5LjIyLDAsMCwxLC4xNCw0LjIyYzAsMi41Ny0uMDksNi43LDIuNjIsNy4zOSwzLjg5LDEsNC44My0zLjE2LDUuNDEtNS45MiwxLjMyLTYuMjUsOS42My0xMC4zNSwxNS43Mi03LjIsNC4yLDIuMTcsNS45MiwzLjQsMTAuMDcsMS41Nyw1LjItMi4yOSw3Ljg3LTguMTIsOS42OC0xMS4yMkExOSwxOSwwLDAsMSwxMzQsMTIwYzguMTEtNS4wNSwyOC40Ni0zLjc0LDI5LjIxLDE4LjcsMCwxLjIyLDAsNC4zNCwwLDYuMjQsMCwyLjE0LjA3LDQuMjMtLjA3LDYuNDQtLjA4LDEuNDctLjM1LDMtLjQ5LDQuNTFDMTYyLjU1LDE1NS45LDE2MS43OSwxNjAuMjksMTY1LjM4LDE2MC4zMVoiLz48cGF0aCBjbGFzcz0iY2xzLTIiIGQ9Ik0xOTAuMjgsMTEwLjc1Yy0uNTYtLjE3LTIuMTYtMS4yMi01LjkzLS40LTMuMDkuNjctMTMuNzMsNi41OC0xNS4wNywzMS40Mi0uMDgsMS41My0uMTQsNS4zNi0uMDksNiwuMDcsMSwuNjYsMi45NC43Niw0LjcsMCwuOC42MiwzLjctLjUxLDUuNTVzLTEuODIsMi4zNC00LjA2LDIuMzNjLTMuNTksMC0yLjgzLTQuNDEtMi44My00LjQxLjE0LTEuNDkuNDEtMywuNDktNC41MS4xNC0yLjIxLjA3LTQuMy4wNy02LjQ0LDAtMS45LDAtNSwwLTYuMjRDMTYyLjQxLDExNi4yNywxNDIuMDYsMTE1LDEzNCwxMjBhMTksMTksMCwwLDAtNy40OCw3LjEyYy0xLjgxLDMuMS00LjQ4LDguOTMtOS42OCwxMS4yMi00LjE1LDEuODMtNS44Ny42LTEwLjA3LTEuNTctNi4wOS0zLjE1LTE0LjQuOTUtMTUuNzIsNy4yLS41OCwyLjc2LTEuNTIsNi45MS01LjQxLDUuOTItMi43MS0uNjktMi42Mi00LjgyLTIuNjItNy4zOWEyOS4yMiwyOS4yMiwwLDAsMC0uMTQtNC4yMmMtMS4xMy0xMC44Mi00LjY3LTE5LjczLTE1LjI4LTI2LjEtNC4yOS0yLjU4LTEzLjU5LTUuOC0yOC40MS42Mi0yLC44NS01Ljc0LDEuMTItOC0uMDdBMjAuNjIsMjAuNjIsMCwwLDEsMjcuMjUsMTEwYTQ3LjIyLDQ3LjIyLDAsMCwxLTUuNzctNi42Yy0uNTctLjctMi45NC0zLjY4LTMuNjQtNC4zNmE2OC40Myw2OC40MywwLDAsMC0xMi05LjI4Yy0xLjUyLTEtMy0xLjY0LTQuNTEtMi42LS40NS0uMjgtLjkxLS41NC0xLjM2LS43OWwwLDY1LjU3YzAsNS41LDMuOSwxMi4yNSw4LjY2LDE1bDc3Ljg2LDQ1YzQuNzYsMi43NiwxMi41NSwyLjc2LDE3LjMxLDBMMTgxLjY2LDE2N2M0Ljc2LTIuNzUsOC42NS05LjUsOC42NS0xNVoiLz48cGF0aCBjbGFzcz0iY2xzLTMiIGQ9Ik0xMDUsOTkuNzNjLTUuMzksMy4xMS0xNC4yLDMuMTEtMTkuNTgsMGwtNzkuNjEtNDJjLjkuODksODAuNzMsNDcuMjcsODAuNzMsNDcuMjcsNC43NiwyLjc2LDEyLjU1LDIuNzYsMTcuMzEsMCwwLDAsNzkuNzQtNDYuMjQsODAuNjMtNDcuMTNaIi8+PHBhdGggY2xhc3M9ImNscy0zIiBkPSJNODUuMzIsOC4wOEM5MC43MSw1LDk5LjUyLDUsMTA0LjksOC4wOWw5LjY1LDRjLS45LS44OS0xMC43OC03LjI5LTEwLjc4LTcuMjktNC43NS0yLjc1LTEyLjU0LTIuNzYtMTcuMywwLDAsMC0xNS43Nyw5LjI3LTE2LjY3LDEwLjE1WiIvPjwvZz48L2c+PC9zdmc+" /></a>
  <a title="Build status" href="https://github.com/trufflesuite/ganache/actions?query=workflow%3ACommits+branch%3Adevelop+event%3Apush"><img alt="" src="https://img.shields.io/github/workflow/status/trufflesuite/ganache/Commits/develop?event=push&amp;style=for-the-badge&amp;labelColor=3c2c30&amp;logo=github&amp;color=b98b5b"></a>
</p>

<p align="center">
  <a href="#features">Features</a> •
  <a href="#getting-started">Getting Started</a> •
  <a href="#documentation">Documentation</a> •
  <a href="#community">Community</a> •
  <a href="#docker">Docker</a> •
  <a href="#contributing">Contributing</a> •
  <a href="#related">Related</a>
</p>



-----------------------
# A local blockchain for fast Ethereum development.

## Features

Ganache is an Ethereum simulator that makes developing Ethereum applications faster, easier, and safer. It includes all popular RPC functions and features (like events) and can be run deterministically to make development a breeze.

- Zero-config Mainnet Forking
- Fork any Ethereum network without waiting to sync
- Ethereum JSON-RPC support
- Snapshot/revert state
- Mine blocks instantly, on demand, or at an interval
- Fast-forward time
- Impersonate any account (no private keys required!)
- Listens for JSON-RPC 2.0 requests over HTTP/WebSockets
- Programmatic use in Node.js
- Pending Transactions

## Getting Started

Ganache can be used from the [command line](#command-line-use), [programmatically](#programmatic-use) via Node.js, or [in the browser](#browser-use).

### Command line use

You must first install [Node.js](https://nodejs.org/) >= v10.13.0 and npm >= 6.4.1.

To install Ganache globally, run:

```console
$ npm install ganache --global
```

In case you're upgrading from a previous version of Ganache, we've also written up [this handy guide](https://github.com/trufflesuite/ganache/blob/develop/UPGRADE-GUIDE.md) on how to upgrade/install Ganache and to document all breaking changes to look out for.

### License

MIT