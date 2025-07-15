
[Earlier this year](../04-24-php-deprecate-warning/), we started to show warnings in logs when you deploy PHP applications with a `CC_PHP_VERSION` corresponding to a release considered as [end-of-life by PHP community](https://www.php.net/supported-versions.php). Today, we start showing such warnings in the environment variables panel of applications in the Clever Cloud Console for:
- `CC_PHP_VERSION`
- `CC_PYTHON_VERSION`
- `CC_RUBY_VERSION`

Our goal is to better inform our customers about the lifecycle of their ecosystems, and to provide guidance on the proper values to use for the version management of their applications. We'll extend this to other runtimes in the coming weeks.


