//index.js
Page({
  data: {
    arrayS: ['计算机类', '马原', '经管', '毛概'],
    arrayD: ['简单', '适中', '难'],
    arrayT: ['选择', '填空', '简答'],
    indexS: 0,
    indexD: 0,
    indexT: 0,
    primarySize :'default',
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
  bindDegreeChange: function (e) {
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexD: e.detail.value
    })
  },
  bindTypeChange: function(e){
    console.log('picker发送选择改变，携带值为', e.detail.value)
    this.setData({
      indexT: e.detail.value
    })
  },
  goPractice: function () {
    var that = this;
    if (that.data.indexT == 0){
      wx.navigateTo({
        url: '/pages/practice/practice?indexS=' + that.data.indexS + '&indexD=' + that.data.indexD + '&indexT=' + that.data.indexT,
      })
    } else if (that.data.indexT == 1) {
      wx.navigateTo({
        url: '/pages/practice1/practice1?indexS=' + that.data.indexS + '&indexD=' + that.data.indexD + '&indexT=' + that.data.indexT,
      })
    } else if (that.data.indexT == 2) {
      wx.navigateTo({
        url: '/pages/practice2/practice2?indexS=' + that.data.indexS + '&indexD=' + that.data.indexD + '&indexT=' + that.data.indexT,
      })
    }
    
  }
})
