
After the availability of Sōzu 1.0 in release candidate and an extensive testing phase, we've identified and fixed some bugs. Over the last few days, we've been deploying version 1.0.2 across all our regions, and it's now fully used in production. This new branch brings a lot of improvements, security and new features to our open source Rust based reverse proxy.

The communication between processes is more efficient thanks to [ProtoBuf](https://fr.wikipedia.org/wiki/Protocol_Buffers), which is now widely used in Sōzu. We've improved the performance through [our contribution to Rustls](https://github.com/rustls/rustls/pull/1774), added colors to logs. Process configuration is 50% faster, certificates renewal has been optimized, and their resolution is now significantly more responsive.

We've also fixed a bug affecting socket timeouts on frontends, ensuring better handling of requests.

* [New Sōzu website](https://www.sozu.io)
* Learn more about [Sōzu new releases](https://github.com/sozu-proxy/sozu/releases) {{< icon "github" >}}

