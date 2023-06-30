# Bmob-Wechat-AI
Bmob微信小程序AI示例



![Bmob-cWechat-Ai 界面图片](https://mmbiz.qpic.cn/mmbiz_gif/VmjKPdXibAh8XWHYxkIy4vICRIJTJGywT5GVqfSwdDxY5UzgdzTgKU839R96P5WH1VzvHBdDPU2bicoEf1A336yQ/640?wx_fmt=gif&tp=wxpic&wxfrom=5&wx_lazy=1)



几行代码就可以拥有强大的AI能力，详细文档请看：[Bmob js sdk文档](http://doc.bmobapp.com/data/wechat_app_new/index.html#ai)：
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
      "session": "userId "// 用户id, 可以通过调用比目的auth登录后获取objectId
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