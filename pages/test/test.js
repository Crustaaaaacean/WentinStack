// pages/test/test.js
Page({
  data: {
    arrayS: ['计算机类', '马院', '经管', '法律'],
    indexS: 0,
    primarySize: 'default',
    disabled: false,
    plain: false,
    loading: false
  },
  bindSubjuctChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexS: e.detail.value
    })
  },
  exam: function(){
    wx.navigateTo({
      url: '/pages/exam/exam',
    })
  }
})