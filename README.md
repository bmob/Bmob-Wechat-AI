# Bmob-Wechat-AI
Bmob微信小程序AI示例

![Bmob-cWechat-Ai 界面图片](https://upload-images.jianshu.io/upload_images/10949492-69d3187c40b97bbc.png?imageMogr2/auto-orient/strip%7CimageView2/2/w/1240)

几行代码就可以拥有强大的AI能力：
```
// 引入Bmob js sdk
import Bmob from 'utils/hydrogen-js-sdk/src/lib/app.js'

// 初始化sdk
Bmob.initialize("你的Application ID", "你的REST API Key");

// 初始化AI链接
this.ChatAi = wx.Bmob.ChatAI()

// 发送消息
 let datas = {
      "messages": [{
        "content": "消息内容",
        "role": "user"
      }],
      "session": userId // 用户id
}
this.ChatAi.send(JSON.stringify(datas))

// 接收消息
let msg = ""
this.ChatAi.onMessage((res) => {
  if (res == "done") {
    //  接收完成，打印消息
   console.log(msg)
  } else {
    msg = msg + res
  }
})

```