
We’ve updated Erlang and Rust images. They were deployed without any impact for our users.

* **Common:**
  * Linux kernel 6.11.6
  * Lighter Vector binary
  * New build/deploy message with colors
  * Users can now use multiple OpenVPN clients in a single instance
* **Erlang:**
  * Elixir 1.17
  * Erlang 27.1.2
* **Rust:**
  * Rust 1.82.0
  * libassuan fix

We also started to add [Redirection.io](https://redirection.io) agent in our images with this update, as part of our [Enthusiast Tools initiative](../10-01-python-image-changes/), and plan to ease its native support in coming releases.

