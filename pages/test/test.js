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
    wx.setStorage({   //缓存传参
      key: "indexS",
      data: that.data.indexS
    })
  },
  exam: function(){
    var that = this;
    wx.navigateTo({
      url: '/pages/exam/exam?indexS=' + that.data.indexS,
      // url: '/pages/exam/exam?',
    })
  },
})