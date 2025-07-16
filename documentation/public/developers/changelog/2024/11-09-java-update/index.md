
We’ve updated Java image. It was deployed without any impact for our users.

  * Java 23 support
  * Linux kernel 6.11.6
  * Lighter Vector binary
  * New build/deploy message with colors
  * [Redirection.io](https://redirection.io) agent is included in the image
  * Users can now use multiple OpenVPN clients in a single instance

As Java 22 is now [considered as end-of-life](https://www.oracle.com/fr/java/technologies/java-se-support-roadmap.html), we invite you to upgrade `CC_JAVA_VERSION` of your applications to `23` or to `21` (latest LTS).

