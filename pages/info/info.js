// pages/info/info.js
const app = getApp()
Page({
  data: {
    userInfo: {},
    hasUserInfo: false,
    canIUse: wx.canIUse('button.open-type.getUserInfo')
  },
  //事件处理函数
  bindViewTap: function () {
    wx.navigateTo({
      url: '../logs/logs'
    })
  },
  onLoad: function () {
    const db = wx.cloud.database();
    db.collection("Questions").get({
      success: res => {
        console.log("获取问题用户：", res.data);
      },
      fail: res => {
        console.error("获取问题失败", err);
      }
    })

    if (app.globalData.userInfo) {
      this.setData({
        userInfo: app.globalData.userInfo,
        hasUserInfo: true
      })
    } else if (this.data.canIUse) {
      // 由于 getUserInfo 是网络请求，可能会在 Page.onLoad 之后才返回
      // 所以此处加入 callback 以防止这种情况
      app.userInfoReadyCallback = res => {
        this.setData({
          userInfo: res.userInfo,
          hasUserInfo: true
        })
      }
    } else {
      // 在没有 open-type=getUserInfo 版本的兼容处理
      wx.getUserInfo({
        success: res => {
          app.globalData.userInfo = res.userInfo
          this.setData({
            userInfo: res.userInfo,
            hasUserInfo: true
          })
        }
      })
    }
  },
  onReady() {

    this.playMusic();
  },
  getUserInfo: function (e) {
    console.log(e)
    app.globalData.userInfo = e.detail.userInfo
    this.setData({
      userInfo: e.detail.userInfo,
      hasUserInfo: true
    })
  },
  // 播放背景音乐
  playMusic() {
    this.audioCtx = wx.createAudioContext('myAudio');
    this.audioCtx.play();
  },

  navExamlogs: function () {//跳转到过往测试记录
    wx.navigateTo({
      url: '../examlogs/examlogs'
    })
  },

  navMistakes: function () {//跳转到错题本
    wx.navigateTo({
      url: '../mistakes/mistakes'
    })
  }
})