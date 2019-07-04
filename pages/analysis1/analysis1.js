// pages/analysis1/analysis1.js
Page({
  data: {
    id: null,
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
      type: options.type,
      id: options.id
    })
  },
  addToMis: function () {
    var that = this;
    const db = wx.cloud.database();
    db.collection('mistakes').add({
      // data 字段表示需新增的 JSON 数据
      data: {
        title: that.data.title,
        analysis: that.data.analysis,
        answer: that.data.answer,
        type: 1,
        _id: that.data.id
      },
      success: function (res) {// res 是一个对象，其中有 _id 字段标记刚创建的记录的 id
          wx.showModal({
            title: '提示',
            content: '已加入错题本',
            showCancel: false
          })
      },
      fail: function () {
        wx.showModal({
          title: '提示',
          content: '错题本已有该题',
          showCancel: false
        })
      }
    })
  },
  goBack: function () {
    wx.navigateBack({
    })
  }
})