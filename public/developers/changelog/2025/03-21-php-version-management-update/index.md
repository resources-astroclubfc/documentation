
Starting today, PHP applications on Clever Cloud are created with `CC_PHP_VERSION=8` environment variable and using default minor PHP version for branch `8`. Nothing changes on already deployed applications.

Starting april 30th, the default minor PHP version for branch `8` will move from `8.3` to `8.4`, released last November. If you need to keep using PHP 8.3, just set `CC_PHP_VERSION=8.3` in your environment variables from the Console or with Clever Tools:

```
clever env set CC_PHP_VERSION 8.3 --app <your-app-id>
```

* [Learn more about PHP on Clever Cloud](/developers/doc/applications/php/)
* [Learn more about environment variables on Clever Cloud](/developers/doc/reference/reference-environment-variables/)


