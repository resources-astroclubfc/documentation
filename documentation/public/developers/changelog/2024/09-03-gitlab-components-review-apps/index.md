
Some months ago, we released [a new GitLab Component](https://gitlab.com/explore/catalog/CleverCloud/clever-cloud-pipeline) to deploy applications from GitLab to Clever Cloud. Version 2.0 is available with variables injection from GitLab CI/CD and automatic releases. You can now use it with the `latest` tag for tests, or `2.0.1` tag for production.

**Breaking changes**: Input `deploy` have been removed to prevent users to script the environment variables injection before deploying the app. Remove it from your `.gitlab-ci.yml` file if it's set up, to avoid breaking your pipeline.

- [Learn more about how to deploy from GitLab to Clever Cloud](/developers/doc/ci-cd/gitlab/)


