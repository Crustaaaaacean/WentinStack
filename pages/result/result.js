// pages/result/result.js
Page({

  /**
   * 页面的初始数据
   */
  data: {
    ration: 0,
    correct: 0,
    error: 0,
  },
  /**
   * 生命周期函数--监听页面加载
   */
  onLoad: function (options) {
    
    this.setData({
      correct: options.correct - 0,
      error: options.error - 0,
      ration: options.ration - 0,
    })

    var tmp = wx.getStorageSync('ration') || [];
    tmp.unshift(this.data.ration);
    wx.setStorageSync('ration', tmp)

  },

  reset: function(){
    wx.navigateBack({
      delta: 2
    })
  },
  wrongAnswer: function(){
    var that = this;
    wx.navigateTo({
      url: '/pages/analysisE/analysisE',
    })
  }
})