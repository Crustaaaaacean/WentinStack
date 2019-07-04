// pages/test/test.js
Page({
  data: {
    arrayS: ['计算机类', '马原', '经管', '毛概'],
    indexS: 0,
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
    var tmp = wx.getStorageSync('indexS') || []
    tmp.unshift(that.data.indexS)
    wx.setStorageSync('indexS', tmp)

    wx.navigateTo({
      url: '/pages/exam/exam?indexS=' + that.data.indexS,
    })
    console.log(that.data.indexS)
  },
})