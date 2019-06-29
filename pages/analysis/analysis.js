// pages/analysis/analysis.js
Page({
  data:{
    analysis: null,
    answer: null,
    A: null,
    B: null,
    C: null,
    D: null,
    title: null
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      analysis: options.analysis,
      answer: options.answer,
      title: options.title,
      A: options.A,
      B: options.B,
      C: options.C,
      D: options.D
    })
  },
  addToMis: function(){
    wx.navigateTo({
      url: '/pages/mistakes/mistakes',
    })
  }
})