// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    A: 2,
    B: 3,
    C: 5,
    D: 0,
    correct: 0,
    error: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options)
    this.setData({
      A: options.A - 0,
      B: options.B - 0,
      C: options.C - 0,
      D: options.D - 0,
      correct: options.correct -0,
      error: options.error -0
    })
  },
  reset: function(){
    wx.navigateBack({
    })
  },
  wrongAnswer: function(){
    wx.navigateTo({
      url: '/pages/analysis/analysis',
    })
  }
})