
[Clever Tools 3.11](https://github.com/CleverCloud/clever-tools/releases/tag/3.11.0) is available. It includes some bug fixes and `clever profile open` commands. Most importantly, it introduces feature flags and KV native support. Thus, you can now enable some commands in alpha/beta status. First is `clever kv` which allows you to manage a Materia KV or Redis® database and send it commands without any dependencies:

```bash
clever addon create kv myKV
clever features enable kv
clever kv myKV SET myKey myValue
clever kv myKV GET myKey
```

You can learn more about `clever kv` in [Clever Tools documentation](/developers/doc/cli/kv-stores/) or using `clever features info kv`. Next year we'll introduce more experimental commands through features flags. Next to come is `clever ng` to manage our [wireguard](https://www.wireguard.com/) based Network Groups.

To upgrade Clever Tools, [use your favorite package manager](/developers/doc/cli/install). For example with `npm`:

```
npm update -g clever-tools
clever version
```


