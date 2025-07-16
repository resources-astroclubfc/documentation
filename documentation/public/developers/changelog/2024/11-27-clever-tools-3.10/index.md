
[Clever Tools 3.10](https://github.com/CleverCloud/clever-tools/releases/tag/3.10.0) is available. It includes some bug fixes on the `domain` command and supports [plugins activation](../11-27-elastic-plugins-support/) for Elasticsearch add-ons at creation (supported plugins list [is here](/developers/doc/addons/elastic/#plugins)). For example:

```bash
clever addon create es-addon --option plugins=analysis-icu,mapper-murmur3
```

To upgrade Clever Tools, [use your favorite package manager](/developers/doc/cli/install). For example with `npm`:

```
npm update -g clever-tools
clever version
```


