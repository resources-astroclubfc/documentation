
You can [install our CLI](/developers/doc/cli/install), Clever Tools, on any system through `npm`, binaries or many package managers.  On Windows, we relied on Chocolatey with a dedicated Nexus instance for years, but we now also support the official Windows package manager, [WinGet](https://github.com/microsoft/winget-cli).

To install the latest version of Clever Tools, you can now use the following command:

```bash
winget install CleverTools
```

And upgrade it with:

```bash
winget upgrade CleverTools
```

We'll add WinGet support to our automatic release process and start deprecating Chocolatey, as it began more difficult to install it through our Nexus instance over the recent releases. You can also continue to download a `.zip` archive [and extract the binary](/developers/doc/cli/install/#binary-zip).

- [Learn more about Clever Tools](https://github.com/CleverCloud/clever-tools) {{< icon "github" >}}


