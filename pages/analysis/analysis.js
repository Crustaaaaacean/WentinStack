// pages/analysis/analysis.js
Page({
  data:{
    analysis: null,
    answer: null
  },
  onLoad: function (options) {
    var that = this;
    that.setData({
      analysis: options.analysis,
      answer: options.answer
    })
  }
})