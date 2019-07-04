// pages/test/test.js
Page({
  data: {
    arrayS: ['计算机类', '马原', '经管', '毛概'],
    indexS: [],
    primarySize: 'default',
    disabled: false,
    plain: false,
    loading: false,
  },
  bindSubjuctChange: function (e) {
    var that = this;
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexS: e.detail.value
    })
  },
  exam: function(){
    var that = this;
    wx.setStorageSync('indexS', that.data.indexS)
    wx.navigateTo({
      url: '/pages/exam/exam?indexS=' + that.data.indexS,
      // url: '/pages/exam/exam?',
    })
  },
})