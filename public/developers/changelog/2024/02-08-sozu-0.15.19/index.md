
Our open source reverse proxy, Sōzu, is now deployed in its version 0.15.19. We fixed behaviors when parsing HTTP 1.1 (mainly pipelining or streaming issues) and implemented the flag `--json` on every query command. We also reduced logging level, enhanced few logs and updated the logger to better track issues.

- Read the full changelog [on GitHub](https://github.com/sozu-proxy/sozu/releases/tag/0.15.19) {{< icon "github" >}}

We expect the next release to be 1.0, with [protobuf](https://protobuf.dev/) everywhere and 2x faster messaging. We'll now use [Metal I/O](https://github.com/tokio-rs/mio) also for communication between workers, rather than threadpools. A release candidate should be released this month.

