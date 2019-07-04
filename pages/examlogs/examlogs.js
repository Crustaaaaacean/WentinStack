// pages/examlogs/examlogs.js
const app = getApp()
Page({
  data:{
    logi:[],
    result:[],
    subject:[],
    array:['计算机类','马原','经管','毛概' ]
  },

  onLoad:function(){
    var value=wx.getStorageSync('testTime');
    var value1=wx.getStorageSync('indexS');
    var value2=wx.getStorageSync('ration');

    this.setData({
      logi:value,
      subject:this.data.array[value1]?this.data.array[value1]:null,
      result:value2
      
    })
    console.log('v', value)

  },


  clearAllElogs:function(){
    wx.clearStorage()
    // wx.removeStorage({
    //   key: 'logi',
    //   success: function(res) {
    //     console.log('ok')
    //   },
    // })
    wx.navigateBack({
    })
    wx.showModal({
      title: '提示',
      content: '记录已清空',
      success: function (res) {
        if (res.confirm) {
          console.log('successClear')
        } else {
          console.log('failedClear')
        }
      }
    })
    app.onLaunch()
    var logi = wx.getStorageSync('logi') || []
    logi.unshift(Date.now())
    wx.setStorageSync('logi', logi)
  }
})