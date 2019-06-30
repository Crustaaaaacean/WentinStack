// pages/analysis2/analysis2.js
Page({
  data: {
    analysis: null,
    title: null
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      analysis: options.analysis,
      title: options.title,
    })
  },
  addToMis: function () {
    wx.navigateTo({
      url: '/pages/mistakes/mistakes',
    })
  }
})