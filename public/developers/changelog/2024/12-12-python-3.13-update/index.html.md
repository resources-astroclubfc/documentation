
We deployed an updated Python image with no impact for our users.

  * uv 0.5.7
  * Linux kernel 6.11.6
  * Redirection.io agent
  * Python 3.13 support
  * Python 3.7 withdrawal

You can now use `3.13` as `CC_PYTHON_VERSION` environment variable. This version will also be used as default value. As announced [in October](../10-01-python-image-changes), Python 3.7 is not supported anymore. However, you can use `uv` to [install or use Python 3.7](https://docs.astral.sh/uv/guides/install-python/#installing-a-specific-version).

