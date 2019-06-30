// pages/analysis1/analysis1.js
Page({
  data: {
    analysis: null,
    answer: null,
    title: null
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      analysis: options.analysis,
      answer: options.answer,
      title: options.title,
    })
  },
  addToMis: function () {
    wx.navigateTo({
      url: '/pages/mistakes/mistakes',
    })
  }
})