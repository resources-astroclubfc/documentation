
We improved our git services on Montreal zone. Newly created applications now use `push-n2-mtl-clevercloud-customers.services.clever-cloud.com` as deployment URL. Applications still using the previous URL starting with `push-n1` won't be impacted by this change. If the new URL is not in your known hosts, you can see a warning during `git+ssh` operations:

```
❯ git clone git+ssh://git@push-n2-mtl-clevercloud-customers.services.clever-cloud.com/app_xxx.git
Cloning into 'app_xxx'…
The authenticity of host 'push-n2-mtl-clevercloud-customers.services.clever-cloud.com (192.99.188.152)' can't be established.
…
This host key is known by the following other names/addresses:
    ~/.ssh/known_hosts:2142: push-n1-mtl-clevercloud-customers.services.clever-cloud.com
Are you sure you want to continue connecting (yes/no/[fingerprint])?
```


