
Our open source reverse proxy, Sōzu, is now deployed in its version 0.15.18. It gives performance enhancements and:

* Fix 502 following a 304 response with a body that does not respect RFCs
* Fix of a panic when upgrading from HTTP to WS or from HTTPs to WSs
* Fix encryption issues when reusing TLS sessions (bump of Rustls)
* Added a `--json` flag to all commands


