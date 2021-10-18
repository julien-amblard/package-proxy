<!-- @format -->

<h2 align="center">package-proxy</h2>

<div align="center">

[![npm](https://img.shields.io/npm/v/package-proxy.svg?style=flat-square)](https://www.npmjs.com/package/package-proxy)
[![CircleCI Status](https://img.shields.io/circleci/build/github/sl-julienamblard/package-proxy/master?style=flat-square)](https://circleci.com/gh/sl-julienamblard/package-proxy)
[![codecov](https://img.shields.io/codecov/c/github/sl-julienamblard/package-proxy?logo=codecov&style=flat-square)](https://codecov.io/gh/sl-julienamblard/package-proxy)
[![npm](https://img.shields.io/bundlephobia/minzip/package-proxy?style=flat-square)](https://www.npmjs.com/package/package-proxy)
[![npm](https://img.shields.io/npm/dt/package-proxy.svg?style=flat-square)](https://www.npmjs.com/package/package-proxy)
[![npm](https://img.shields.io/npm/l/package-proxy.svg?style=flat-square)](https://github.com/sl-julienamblard/package-proxy/blob/packages/package-proxy/LICENSE)

</div>

## Table of Contents

1. [Install](#install)
1. [The problem](#problem)
1. [The solution](#solution)
1. [How to use](#usage)

<a id="install"></a>

<h2 align="center">Install</h2>

_Install with npm:_

```bash
    npm i package-proxy --save-dev
```

_Install with yarn:_

```bash
    yarn add package-proxy --dev
```

<a id="problem"></a>

## The problem

- <h4>Barrel file and Tree Shaking</h4>

In most package, all module are exports in one barrel file like this

```bash
import { foo, bar, baz } from "packageName"
```

**This can be a dangerous practice** because most of bundler (**including webpack**) will import every module in the bundled flie even if you only import one module.  
This can lead to a huge increasing of bundle size.

[=> Read more about barrel file and tree shaking](https://lecstor.com/code-tree-webpack/)

- <h4>Awefull import path</h4>

On another side, if you need to expose a lot of module and want to get rid of barrel file,  
you will need to let the user do import like this:

```bash
  import foo from "packageName/lib/foo"
  import bar from "packageName/lib/path/to/file/bar"
```

<a id="solution"></a>

<h3>The solution</h3>

This package help you to create proxy to transform import like this:

```bash
  import foo from "packageName/lib/foo"
  import bar from "packageName/lib/path/to/file/bar"
```

into this:

```bash
  import foo from "packageName/foo"
  import bar from "packageName/bar"
```

with one config file.

More precisely, it will create a `package.json` file like this:

```json
{
  "name": "packageName/foo",
  "private": true,
  "main": "../lib/path/to/module/foo/index.js",
  "module": "../esm/path/to/module/foo/index.js",
  "types": "../lib/path/to/module/foo/index.d.js"
}
```

<a id="usage"></a>

<h3>How to use</h3>

<a id="config"></a>

## Config file

In your root folder, create a `pproxy.json` file

```json
{
  "packageName": "yourPackageName",
  "proxify": [
    {
      "src": "folderToProxify"
    }
}
```

//on continue demain j'ne ai ma claque

<a id="CLI"></a>

## CLI

### commands

| command   | description            |
| --------- | ---------------------- |
| **write** | create the proxy files |

> This is an optional command. Avoiding it will also trigger the **write** command

```bash
  proxify write
```

| command   | description            |
| --------- | ---------------------- |
| **clean** | clean the proxy files. |

```bash
  proxify clean
```

### options

| option                    | description                 |
| ------------------------- | --------------------------- |
| **-c, --config \<path\>** | custom the config file path |

```bash
  proxify create --config path/to/config.json
```

| option         | description |
| -------------- | ----------- |
| **-h, --help** | Show help   |

```bash
  proxify --help
```

| option            | description          |
| ----------------- | -------------------- |
| **-v, --version** | Show package version |

```bash
  proxify --version
```
