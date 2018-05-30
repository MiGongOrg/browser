# OIFI 云端解析 微信小程序 SDK

## 这是一个测试，你看到的一切都是幻觉

#### 安装

```sh
# 使用 NPM 管理 OIFI SDK
npm install sound-oifi
```

###### 引入

```javascript
// 将 sound-oifi.js 直接放到微信小程序的项目中，使用 commonjs 引入
var OIFI = require('sound-oifi')
```

###### WePy

```javascript
import OIFI from 'sound-oifi'
```

#### 初始化

```javascript
var oifi = new OIFI({
  key: 'OIFI KEY',
  success: function (res) {
    // 声波解析成功后将在这里返回数据，可以在这里处理你的业务逻辑
    console.log(res)
  },
  fail: function (error) {
    console.log(error)
  }
})
```

#### 开启解析

> 开启录音，与云端建立通讯，音频流实时上传到云端解析

```javascript
oifi.startListen()
```

#### 停止解析

> 停止录音，断开与云端建立的连接

```javascript
oifi.stopListen()
```
