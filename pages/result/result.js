// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ration: 0,
    correct: 0,
    error: 0
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
   console.log(options)
    this.setData({
      correct: options.correct - 0,
      error: options.error - 0,
      ration: options.ration - 0
    })
  },
  reset: function(){
    wx.navigateBack({
      delta: 2
    })
  },
  wrongAnswer: function(){
    wx.navigateTo({
      url: '/pages/analysis/analysis',
    })
  }
})