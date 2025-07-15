
As [PostgreSQL 16 and 17 are now available](/developers/changelog/2025/03-18-postgresql-16-17/) on Clever Cloud, we'll start to limit access to end-of-life releases: PostgreSQL 11 and 12. **Starting April 30th**, you won't be able to create new PostgreSQL 11 or 12 add-ons. Note that:
* PG11/12 databases deployed before April 30th will still be available after this deadline
* Customers will still be able to manage their existing PG11/12 databases after this deadline

But **we recommend you to migrate to an actively supported version**. You can do it easily using our included migration tool in your add-on parameters. In the coming weeks, you'll start to see warnings in [the Console](https://console.clever-cloud.com) if you are still using PostgreSQL 12 or a lower version.

* [PostgreSQL versioning policy](https://www.postgresql.org/support/versioning/)
* [Learn more about PostgreSQL on Clever Cloud](/developers/doc/addons/postgresql/)


