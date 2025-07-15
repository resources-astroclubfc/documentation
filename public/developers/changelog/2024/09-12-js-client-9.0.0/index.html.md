
We released [Clever Cloud JS client 9.0.0](https://github.com/CleverCloud/clever-client.js/blob/master/CHANGELOG.md#900-2024-09-11). It computes OAuth v1 signature with Web Crypto for all platforms (Browser, Node.js, Deno, Bun, CF workers, etc.) instead of relying on `node:crypto`. This will simplify usage of the client with a bundler.

