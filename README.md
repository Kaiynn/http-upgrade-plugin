# http-upgrade-plugin
http协议请求升级https协议请求

### Install

```
npm install http-upgrade-plugin --save dev
```

### Methods
HttpUpgrade({template:"index.html", isUpgrade:true}) // template模版资源名称 isUpgrade是否将http协议升级成https

### Usage

```js
const HttpUpgrade = require('http-upgrade-plugin')
...
    plugins: [
        ...
        new HttpUpgrade({template:"index.html", isUpgrade:process.env.XXX==='production'})
        ...
    ]
...

```

### License
MIT