// app.js 

// 源码引入方式，方便调试
import Bmob from 'utils/hydrogen-js-sdk/src/lib/app.js'

// Bmob.initialize('bc7814ffb203da9f', '123456');
Bmob.initialize('fda2aa4220549f74', '8f7jh2529a18d30q');

App({
  onLaunch: function () {
    // const query = Bmob.Query('_User')
    // query.find().then(res => {
    //   console.log(res)
    // })
    // 一键登录
    // Bmob.User.auth().then(res => {
    //   console.log(res);
    //   console.log('一键登录成功')
    //   var userData = {
    //     nickName: res.nickName,
    //     objectId: res.objectId,
    //     openid: res.openid,
    //     userPic: res.userPic,
    //     username: res.username
    //   };
    //   wx.setStorageSync('userData', userData);
    //   wx.setStorageSync('openid', res.authData.weapp.openid)
    // }).catch(err => {
    //   console.log(err);
    // })
  },
  globalData: {
    userInfo: null
  }
})